"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

import {
  type ArtistFormData,
  categoryOptions,
  languageOptions,
  feeRangeOptions,
  experienceOptions,
} from "@/types/artist-form";

interface ProfessionalInformationSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export default function ProfessionalInformationSection({
  form,
}: ProfessionalInformationSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" />
            Professional Information
          </CardTitle>
          <CardDescription>
            Details about your artistic expertise and services
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories *</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={categoryOptions}
                    selected={field.value}
                    onChange={field.onChange}
                    placeholder="Select your performance categories"
                    maxSelection={3}
                  />
                </FormControl>
                <FormDescription>
                  Choose up to 3 categories that best describe your skills
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="languages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Languages Spoken *</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={languageOptions}
                    selected={field.value}
                    onChange={field.onChange}
                    placeholder="Select languages you speak"
                  />
                </FormControl>
                <FormDescription>
                  Languages you can perform or communicate in
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="feeRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fee Range *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Select your fee range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {feeRangeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Your typical performance fee range
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience *</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-purple-500">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experienceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value.toString()}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Years of professional performance experience
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
