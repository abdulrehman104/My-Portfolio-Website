"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FooterCard } from "@/components/footer-card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // WIP: Add Api to et email to you
  }
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-4 relative inline-block">
            Contact Us
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1"></div>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
              Let’s Build Something Amazing Together!
            </h2>
            <p className="text-gray-400">
              I&apos;m always excited to collaborate on new and challenging
              projects. Whether you’re looking to develop a modern web
              application, integrate smart solutions, or bring your ideas to
              life, I’m here to help!
            </p>
            <p className="text-gray-400">
              Feel free to reach out using the form or the contact information
              below. I look forward to hearing from you and discussing how we
              can create something extraordinary.
            </p>
            <div>
              <h3 className="text-2xl font-bold text-[#8A7FF8]">My Info</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center">
                  <span className="mr-2">📧</span>
                  <p className="text-gray-300">abdulreehman104@gmail.com</p>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <p className="text-gray-300">+92 326 2504906</p>
                </li>
                <li className="flex items-center">
                  <HomeIcon className="mr-2" />
                  <p className="text-gray-300">Karachi, Pakistan</p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Decorative Border - Move to back */}
            <div className="absolute -right-5 -bottom-5 w-full h-full border-2 border-[#8A7FF8] rounded-lg z-0" />
            <Card className="w-full bg-white shadow-xl relative z-10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
                                {...field}
                              />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter Your Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Leave Your Message"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] hover:opacity-90 text-white py-6"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
