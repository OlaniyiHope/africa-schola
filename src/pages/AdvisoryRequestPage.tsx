import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, ArrowRight, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

const advisoryTypes = [
  { value: "transcript", label: "Transcript Advisory", description: "Guidance on obtaining academic transcripts" },
  { value: "degree", label: "Degree Programs", description: "Part-time, Master's, or Doctoral pathway support" },
  { value: "mobility", label: "Study in Africa", description: "Academic mobility and study abroad guidance" },
  { value: "institutional", label: "Institutional Liaison", description: "Formal engagement with academic institutions" },
];

const nigerianUniversities = [
  "University of Lagos",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "University of Nigeria, Nsukka",
  "Ahmadu Bello University",
  "University of Benin",
  "University of Ilorin",
  "Covenant University",
  "Lagos State University",
  "Federal University of Technology, Akure",
  "Nnamdi Azikiwe University",
  "University of Port Harcourt",
  "Bayero University Kano",
  "Federal University of Agriculture, Abeokuta",
  "Other",
];

const degreeTypes = [
  { value: "part-time", label: "Part-Time Undergraduate" },
  { value: "masters", label: "Master's Degree" },
  { value: "doctoral", label: "Doctoral (PhD)" },
  { value: "professional", label: "Professional Certification" },
];

const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(2, "Country is required"),
  
  // Advisory Type
  advisoryType: z.string().min(1, "Please select an advisory type"),
  
  // Transcript-specific
  university: z.string().optional(),
  graduationYear: z.string().optional(),
  transcriptPurpose: z.string().optional(),
  
  // Degree-specific
  degreeType: z.string().optional(),
  fieldOfStudy: z.string().optional(),
  preferredInstitutions: z.string().optional(),
  
  // Mobility-specific
  currentCountry: z.string().optional(),
  destinationCountry: z.string().optional(),
  mobilityPurpose: z.string().optional(),
  
  // Institutional-specific
  institutionName: z.string().optional(),
  engagementType: z.string().optional(),
  
  // Additional
  additionalInfo: z.string().optional(),
  urgency: z.string().optional(),
  
  // Consent
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Advisory Type" },
  { id: 3, title: "Details" },
  { id: 4, title: "Review" },
];

export default function AdvisoryRequestPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      termsAccepted: false,
    },
  });

  const advisoryType = watch("advisoryType");
  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ["fullName", "email", "phone", "country"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["advisoryType"];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: FormData) => {
    console.log("Advisory request submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="container-section">
            <div className="max-w-2xl mx-auto text-center">
              <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your advisory request. Our team will review your 
                submission and get back to you within 2-3 business days with 
                personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/advisory">Back to Advisory</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">Go to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground section-padding">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Request Advisory Support
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Tell us about your needs and we'll provide personalized guidance 
              for your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b">
        <div className="container-section">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 md:gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium ${
                      currentStep >= step.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm hidden sm:inline ${
                      currentStep >= step.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 md:w-16 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-section">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Tell us about yourself so we can personalize our guidance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+234 800 000 0000"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country of Residence *</Label>
                      <Input
                        id="country"
                        {...register("country")}
                        placeholder="e.g., Nigeria"
                      />
                      {errors.country && (
                        <p className="text-sm text-destructive">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Advisory Type */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Advisory Type</CardTitle>
                  <CardDescription>
                    Choose the type of advisory support you need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={advisoryType}
                    onValueChange={(value) => setValue("advisoryType", value)}
                    className="space-y-4"
                  >
                    {advisoryTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                          advisoryType === type.value
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50"
                        }`}
                        onClick={() => setValue("advisoryType", type.value)}
                      >
                        <RadioGroupItem value={type.value} id={type.value} />
                        <div className="flex-1">
                          <Label
                            htmlFor={type.value}
                            className="font-medium cursor-pointer"
                          >
                            {type.label}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                  {errors.advisoryType && (
                    <p className="text-sm text-destructive mt-2">
                      {errors.advisoryType.message}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Step 3: Type-Specific Details */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {advisoryType === "transcript" && "Transcript Details"}
                    {advisoryType === "degree" && "Degree Program Details"}
                    {advisoryType === "mobility" && "Mobility Details"}
                    {advisoryType === "institutional" && "Institutional Details"}
                  </CardTitle>
                  <CardDescription>
                    Provide specific details about your request.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Transcript-specific fields */}
                  {advisoryType === "transcript" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="university">University *</Label>
                        <Select
                          onValueChange={(value) => setValue("university", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your university" />
                          </SelectTrigger>
                          <SelectContent>
                            {nigerianUniversities.map((uni) => (
                              <SelectItem key={uni} value={uni}>
                                {uni}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Year of Graduation</Label>
                        <Input
                          id="graduationYear"
                          {...register("graduationYear")}
                          placeholder="e.g., 2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="transcriptPurpose">
                          Purpose of Transcript Request
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("transcriptPurpose", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="further-study">
                              Further Studies Abroad
                            </SelectItem>
                            <SelectItem value="employment">Employment</SelectItem>
                            <SelectItem value="professional-body">
                              Professional Body Registration
                            </SelectItem>
                            <SelectItem value="immigration">Immigration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {/* Degree-specific fields */}
                  {advisoryType === "degree" && (
                    <>
                      <div className="space-y-2">
                        <Label>Type of Degree Program</Label>
                        <Select
                          onValueChange={(value) => setValue("degreeType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select degree type" />
                          </SelectTrigger>
                          <SelectContent>
                            {degreeTypes.map((degree) => (
                              <SelectItem key={degree.value} value={degree.value}>
                                {degree.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fieldOfStudy">Field of Study</Label>
                        <Input
                          id="fieldOfStudy"
                          {...register("fieldOfStudy")}
                          placeholder="e.g., Business Administration, Computer Science"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredInstitutions">
                          Preferred Institutions (if any)
                        </Label>
                        <Textarea
                          id="preferredInstitutions"
                          {...register("preferredInstitutions")}
                          placeholder="List any universities you're interested in..."
                          rows={3}
                        />
                      </div>
                    </>
                  )}

                  {/* Mobility-specific fields */}
                  {advisoryType === "mobility" && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentCountry">Current Country</Label>
                          <Input
                            id="currentCountry"
                            {...register("currentCountry")}
                            placeholder="e.g., Nigeria"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destinationCountry">
                            Destination Country
                          </Label>
                          <Input
                            id="destinationCountry"
                            {...register("destinationCountry")}
                            placeholder="e.g., South Africa, Ghana"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobilityPurpose">Purpose of Mobility</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("mobilityPurpose", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="degree">Full Degree Program</SelectItem>
                            <SelectItem value="exchange">
                              Exchange/Semester Abroad
                            </SelectItem>
                            <SelectItem value="research">
                              Research Collaboration
                            </SelectItem>
                            <SelectItem value="conference">
                              Conference/Short Course
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {/* Institutional-specific fields */}
                  {advisoryType === "institutional" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="institutionName">Institution Name</Label>
                        <Input
                          id="institutionName"
                          {...register("institutionName")}
                          placeholder="Name of the institution you want to engage with"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="engagementType">Type of Engagement</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("engagementType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select engagement type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="partnership">
                              Institutional Partnership
                            </SelectItem>
                            <SelectItem value="mou">MoU Development</SelectItem>
                            <SelectItem value="research">
                              Research Collaboration
                            </SelectItem>
                            <SelectItem value="capacity">
                              Capacity Building
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {/* Common fields for all types */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      {...register("additionalInfo")}
                      placeholder="Any other details that would help us assist you better..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Urgency Level</Label>
                    <RadioGroup
                      onValueChange={(value) => setValue("urgency", value)}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="font-normal">
                          Low (Within 2 weeks)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="font-normal">
                          Medium (Within 1 week)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="font-normal">
                          High (Urgent)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Request</CardTitle>
                  <CardDescription>
                    Please review your information before submitting.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-medium mb-2">Personal Information</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Name:</span>
                        <span>{formData.fullName}</span>
                        <span className="text-muted-foreground">Email:</span>
                        <span>{formData.email}</span>
                        <span className="text-muted-foreground">Phone:</span>
                        <span>{formData.phone}</span>
                        <span className="text-muted-foreground">Country:</span>
                        <span>{formData.country}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-medium mb-2">Advisory Type</h4>
                      <p>
                        {advisoryTypes.find((t) => t.value === formData.advisoryType)
                          ?.label || "Not selected"}
                      </p>
                    </div>

                    {formData.additionalInfo && (
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium mb-2">Additional Information</h4>
                        <p className="text-sm">{formData.additionalInfo}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        setValue("termsAccepted", checked as boolean)
                      }
                    />
                    <div className="space-y-1">
                      <Label htmlFor="termsAccepted" className="cursor-pointer">
                        I understand and accept the terms
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I understand that Afrika Scholar provides advisory services 
                        only. All formal processes must be completed directly with 
                        the relevant institutions.
                      </p>
                    </div>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive">
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
              ) : (
                <Button type="button" variant="outline" asChild>
                  <Link to="/advisory">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Advisory
                  </Link>
                </Button>
              )}

              {currentStep < 4 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className="bg-accent hover:bg-accent/90">
                  Submit Request
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
