"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Globe } from "lucide-react";
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
import { Input } from "@/components/ui/input";

import { type ArtistFormData } from "@/types/artist-form";

interface OnlinePresenceSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export default function OnlinePresenceSection({
  form,
}: OnlinePresenceSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-600" />
            Online Presence
          </CardTitle>
          <CardDescription>
            Help clients discover more about your work (optional)
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://yourwebsite.com"
                    {...field}
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </FormControl>
                <FormDescription>
                  Your portfolio website or professional page
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialMedia.instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input
                    placeholder="@yourusername"
                    {...field}
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialMedia.youtube"
            render={({ field }) => (
              <FormItem>
                <FormLabel>YouTube</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your channel name"
                    {...field}
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socialMedia.facebook"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your page name"
                    {...field}
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
