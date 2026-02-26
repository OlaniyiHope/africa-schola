import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ArrowLeft, Upload, CheckCircle, ChevronRight,
  User, GraduationCap, BookOpen, FileText, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout";
import { toast } from "@/hooks/use-toast";
import transcriptHero from "@/assets/about-conference.jpg";
const formSchema = z.object({
  // Personal Info
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select your country"),
  
  // Academic Background
  highestDegree: z.string().min(1, "Please select your highest degree"),
  institution: z.string().min(2, "Please enter your institution"),
  fieldOfStudy: z.string().min(2, "Please enter your field of study"),
  graduationYear: z.string().min(4, "Please enter graduation year"),
  
  // Areas of Interest
  teachingInterest: z.boolean().default(false),
  researchInterest: z.boolean().default(false),
  peerReviewInterest: z.boolean().default(false),
  curriculumInterest: z.boolean().default(false),
  disciplines: z.string().min(2, "Please enter your disciplines"),
  
  // Research Experience
  hasPublications: z.string().min(1, "Please select an option"),
  researchAreas: z.string().optional(),
  
  // Statement
  motivation: z.string().min(50, "Please provide at least 50 characters"),
  
  // Consent
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms"),
  dataConsent: z.boolean().refine((val) => val === true, "You must consent to data processing"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Academic Background", icon: GraduationCap },
  { id: 3, title: "Areas of Interest", icon: BookOpen },
  { id: 4, title: "Experience & Statement", icon: FileText },
];

const countries = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", 
  "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Cameroon", "Senegal", "Other"
];

const degrees = [
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree (PhD)",
  "Professional Degree (MD, JD, etc.)",
];

export default function NetworkApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      highestDegree: "",
      institution: "",
      fieldOfStudy: "",
      graduationYear: "",
      teachingInterest: false,
      researchInterest: false,
      peerReviewInterest: false,
      curriculumInterest: false,
      disciplines: "",
      hasPublications: "",
      researchAreas: "",
      motivation: "",
      termsAccepted: false,
      dataConsent: false,
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["firstName", "lastName", "email", "phone", "country"];
        break;
      case 2:
        fieldsToValidate = ["highestDegree", "institution", "fieldOfStudy", "graduationYear"];
        break;
      case 3:
        fieldsToValidate = ["disciplines"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container-section section-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="py-12">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for applying to join the Afrika Scholar Academic Network. 
                Our team will review your application and contact you within 5-7 business days.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/network">Back to Network</Link>
                </Button>
                <Button asChild>
                  <Link to="/">Go to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/network" className="hover:text-foreground">Network</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Apply</span>
          </nav>
        </div>
      </div>

<section className="relative overflow-hidden min-h-[400px]">
  <div className="absolute inset-0">
    <img
      src={transcriptHero}
      alt="Transcript Advisory"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/85" />
  </div>
  <div className="absolute inset-0 opacity-10">
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="transcript-grid"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="0.4"
            fill="currentColor"
            className="text-primary-foreground"
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#transcript-grid)" />
    </svg>
  </div>
  <div className="container-section relative section-padding">
    <div className="max-w-3xl mx-auto text-center text-primary-foreground">
      <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
Join the Academic Network
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
Join the Academic Network
      </h1>
      <p className="text-xl text-primary-foreground/80">
 Complete this application to join Afrika Scholar's Lecturer & Academic Partners Network.
      </p>
    </div>
  </div>
</section>

      {/* Progress Steps */}
      <section className="border-b bg-background sticky top-16 z-40">
        <div className="container-section py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center gap-2 ${
                    currentStep >= step.id ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep > step.id
                        ? "bg-accent text-accent-foreground"
                        : currentStep === step.id
                        ? "bg-accent/10 border-2 border-accent text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-16 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-accent" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-section">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>Step {currentStep} of 4</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+234 800 000 0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country of Residence *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Step 2: Academic Background */}
                  {currentStep === 2 && (
                    <>
                      <FormField
                        control={form.control}
                        name="highestDegree"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highest Degree Obtained *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your highest degree" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {degrees.map((degree) => (
                                  <SelectItem key={degree} value={degree}>
                                    {degree}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution *</FormLabel>
                            <FormControl>
                              <Input placeholder="University of Lagos" {...field} />
                            </FormControl>
                            <FormDescription>
                              Where you obtained your highest degree
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="fieldOfStudy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Field of Study *</FormLabel>
                            <FormControl>
                              <Input placeholder="Economics" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Graduation *</FormLabel>
                            <FormControl>
                              <Input placeholder="2020" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Step 3: Areas of Interest */}
                  {currentStep === 3 && (
                    <>
                      <div>
                        <FormLabel className="text-base">Types of Engagement *</FormLabel>
                        <FormDescription className="mb-4">
                          Select all that apply
                        </FormDescription>
                        <div className="space-y-3">
                          <FormField
                            control={form.control}
                            name="teachingInterest"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Teaching (part-time lecturing, guest lectures)
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="researchInterest"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Research Collaboration
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="peerReviewInterest"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Peer Review
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="curriculumInterest"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Curriculum Development
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="disciplines"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Disciplines / Subject Areas *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Economics, Development Studies, Public Policy"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              List your areas of expertise (comma-separated)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Step 4: Experience & Statement */}
                  {currentStep === 4 && (
                    <>
                      <FormField
                        control={form.control}
                        name="hasPublications"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Do you have academic publications? *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="yes-many">Yes, more than 5 publications</SelectItem>
                                <SelectItem value="yes-few">Yes, 1-5 publications</SelectItem>
                                <SelectItem value="in-progress">In progress</SelectItem>
                                <SelectItem value="no">No publications yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="researchAreas"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Research Areas (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Briefly describe your current research focus..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why do you want to join the network? *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share your motivation for joining and how you hope to contribute..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Minimum 50 characters
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="border-t pt-6 space-y-4">
                        <FormField
                          control={form.control}
                          name="termsAccepted"
                          render={({ field }) => (
                            <FormItem className="flex items-start gap-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal cursor-pointer">
                                  I accept the terms and conditions of the Afrika Scholar Network *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="dataConsent"
                          render={({ field }) => (
                            <FormItem className="flex items-start gap-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal cursor-pointer">
                                  I consent to Afrika Scholar processing my data for network purposes *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    {currentStep > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    ) : (
                      <div />
                    )}
                    {currentStep < 4 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
