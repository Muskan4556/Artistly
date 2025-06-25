"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import PersonalInformationSection from "./personal-information-section";
import ProfessionalInformationSection from "./professional-information-section";
import OnlinePresenceSection from "./online-presence-section";

import { artistFormSchema, type ArtistFormData } from "@/types/artist-form";

export default function ArtistOnboardingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ArtistFormData>({
    resolver: zodResolver(artistFormSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      categories: [],
      languages: [],
      feeRange: "",
      experience: 0,
      website: "",
      socialMedia: {
        instagram: "",
        youtube: "",
        facebook: "",
      },
    },
  });

  const onSubmit = async (data: ArtistFormData) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Artist Form Data:", data);

      toast.success("Application submitted successfully!", {
        description:
          "We'll review your profile and get back to you within 24 hours.",
        duration: 6000,
      });

      form.reset();
    } catch {
      toast.error("Something went wrong!", {
        description: "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Join Artistly
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Create your artist profile and start connecting with event
            organizers across India
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInformationSection form={form} />
            <ProfessionalInformationSection form={form} />
            <OnlinePresenceSection form={form} />

            <div className="flex flex-col items-center gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto min-w-[200px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>

              {!form.formState.isValid && (
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-md">
                  {`Please fill in all required fields (*) to submit your
                  application. We'll review your profile and get back to
                  you within 24 hours.`}
                </p>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
 