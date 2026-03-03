"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-indigo-600 items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 opacity-90" />
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg text-white"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">EduParent Pro</h1>
          </div>
          
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Nurturing Excellence <br />
            <span className="text-indigo-200">Through Connectivity.</span>
          </h2>
          
          <p className="text-lg text-indigo-100 mb-10 leading-relaxed">
            The all-in-one parent portal designed for elite international schools. 
            Stay engaged with your child's academic journey with real-time insights, 
            seamless communication, and premium features.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-indigo-200" />
              </div>
              <div>
                <p className="font-semibold">Secure Access</p>
                <p className="text-sm text-indigo-200">Enterprise-grade security for your family data.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-indigo-200" />
              </div>
              <div>
                <p className="font-semibold">Real-time Updates</p>
                <p className="text-sm text-indigo-200">Instant notifications on grades and events.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">EduParent Pro</span>
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h3>
            <p className="text-slate-500">Please enter your details to access the portal.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Parent ID or Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="pl-10 h-12 rounded-xl border-slate-200 focus:border-indigo-600 focus:ring-indigo-600 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 h-12 rounded-xl border-slate-200 focus:border-indigo-600 focus:ring-indigo-600 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="rounded-md border-slate-300" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
              >
                Remember me for 30 days
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all shadow-lg shadow-indigo-200 group"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-12 text-center text-sm text-slate-500">
            <p>
              Having trouble logging in? <br />
              Contact the school administration at <span className="text-indigo-600 font-medium">support@school.edu</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
