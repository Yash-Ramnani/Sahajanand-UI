"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Bell, 
  Moon, 
  Sun, 
  Lock, 
  LogOut, 
  ChevronRight, 
  Camera, 
  Plus, 
  CheckCircle2, 
  Globe, 
  Smartphone,
  CreditCard,
  History,
  Info
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <User className="w-8 h-8 text-indigo-600" />
            Profile & Settings
          </h1>
          <p className="text-slate-500 mt-1">Manage your account preferences, notifications, and student details.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-6 shadow-lg shadow-indigo-100 font-bold gap-2">
            Save All Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav for Settings */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { label: "Account Overview", icon: User, active: true },
            { label: "Student Details", icon: ShieldCheck, active: false },
            { label: "Notifications", icon: Bell, active: false },
            { label: "Security & Privacy", icon: Lock, active: false },
            { label: "Billing & Subscriptions", icon: CreditCard, active: false },
            { label: "Connected Devices", icon: Smartphone, active: false },
          ].map((item, i) => (
            <div 
              key={i} 
              className={cn("flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 group", 
                item.active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white border border-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", item.active ? "text-white" : "text-slate-400 group-hover:text-indigo-600")} />
                <span className="text-sm font-bold tracking-tight">{item.label}</span>
              </div>
              <ChevronRight className={cn("w-4 h-4", item.active ? "text-white/60" : "text-slate-300 group-hover:text-indigo-300")} />
            </div>
          ))}
        </div>

        {/* Main Settings Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Profile Header */}
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-8 border-slate-50 shadow-sm ring-1 ring-slate-100 group-hover:ring-indigo-200 transition-all duration-300">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-1 right-1 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:bg-indigo-600 hover:text-white transition-all">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                  <h2 className="text-3xl font-black text-slate-900">Jonathan Doe</h2>
                  <Badge className="bg-indigo-50 text-indigo-600 font-black text-[10px] uppercase tracking-widest border-none px-3 py-1 w-fit mx-auto md:mx-0">Premium Parent Plan</Badge>
                </div>
                <p className="text-slate-500 font-medium mb-6">Parent ID: #P-2024098 • Joined Sep 2022</p>
                <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><Mail className="w-4 h-4 text-indigo-500" /> jonathan.doe@example.com</div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><Phone className="w-4 h-4 text-indigo-500" /> +1 234 567 890</div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><MapPin className="w-4 h-4 text-indigo-500" /> Seattle, WA</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Form Sections */}
          <Tabs defaultValue="account" className="w-full space-y-8">
            <TabsList className="bg-slate-50 p-1.5 rounded-2xl border border-slate-100 h-14 flex items-center justify-start gap-1 w-fit">
              <TabsTrigger value="account" className="rounded-xl px-10 h-11 font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">Account Info</TabsTrigger>
              <TabsTrigger value="students" className="rounded-xl px-10 h-11 font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">My Students</TabsTrigger>
              <TabsTrigger value="notifications" className="rounded-xl px-10 h-11 font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-8 mt-0">
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900">Personal Information</CardTitle>
                  <CardDescription>Update your contact and residential details.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Full Name</Label>
                      <Input defaultValue="Jonathan Doe" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Email Address</Label>
                      <Input defaultValue="jonathan.doe@example.com" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Phone Number</Label>
                      <Input defaultValue="+1 234 567 890" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Secondary Phone</Label>
                      <Input placeholder="+1 000 000 000" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <Label className="font-bold text-slate-700">Permanent Address</Label>
                    <Input defaultValue="123 Elite Avenue, Seattle, WA 98101" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900">App Preferences</CardTitle>
                  <CardDescription>Customize your dashboard experience.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600">
                        {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Dark Mode Interface</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Toggle system appearance</p>
                      </div>
                    </div>
                    <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white rounded-xl shadow-sm text-emerald-600">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Automatic Translation</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Translate messages to your language</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
