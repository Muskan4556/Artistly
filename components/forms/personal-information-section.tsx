"use client";

import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { User, Image as ImageIcon, X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { type ArtistFormData } from "@/types/artist-form";

interface PersonalInformationSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export default function PersonalInformationSection({
  form,
}: PersonalInformationSectionProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (file: File | undefined) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
    } else {
      setImagePreview(null);
    }
  };

  const bioLength = form.watch("bio")?.length || 0;

  const getFieldValidationIcon = (fieldName: string, hasError: boolean) => {
    if (hasError) {
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-purple-600" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Tell us about yourself and help clients get to know you better
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="flex items-center gap-2">
                  Full Name *
                  <AnimatePresence>
                    {getFieldValidationIcon("name", !!fieldState.error)}
                  </AnimatePresence>
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className={`transition-all duration-200 focus:ring-2 focus:ring-purple-500 ${
                        fieldState.error
                          ? "border-red-500 focus:border-red-500"
                          : field.value
                          ? "border-green-500 focus:border-green-500"
                          : ""
                      }`}
                    />
                  </motion.div>
                </FormControl>
                <AnimatePresence>
                  {fieldState.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FormMessage />
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Bio / About You *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your background, experience, and what makes you unique as a performer..."
                    className="min-h-[120px] transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="flex justify-between items-center">
                  <span>
                    Share your story, achievements, and performance style
                  </span>
                  <motion.span
                    className={`text-sm font-medium flex items-center gap-1 ${
                      bioLength < 50
                        ? "text-red-500"
                        : bioLength > 450
                        ? "text-orange-500"
                        : "text-green-500"
                    }`}
                    animate={{
                      scale:
                        bioLength === 50 || bioLength === 500 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {bioLength < 50 && <AlertCircle className="w-3 h-3" />}
                    {bioLength > 450 && <AlertCircle className="w-3 h-3" />}
                    {bioLength}/500
                  </motion.span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    {...field}
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </FormControl>
                <FormDescription className="md:-mt-8 md:mx-2">
                  {`City or region where you're based`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profileImage"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {imagePreview ? (
                            <div className="relative w-20 h-20">
                              <Image
                                src={imagePreview}
                                alt="Profile image preview"
                                fill
                                className="object-cover rounded-full"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  onChange(undefined);
                                  handleImageUpload(undefined);
                                }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <>
                              <ImageIcon className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                Click to upload profile image
                              </p>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file);
                            handleImageUpload(file);
                          }}
                          name={field.name}
                          onBlur={field.onBlur}
                          ref={field.ref}
                        />
                      </label>
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  Upload a professional photo (max 5MB)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
