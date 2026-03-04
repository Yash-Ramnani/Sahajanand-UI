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
  CreditCard,
  History,
  Info,
  GraduationCap,
  BookOpen,
  Eye,
  EyeOff,
  KeyRound,
  ShieldAlert,
  Receipt,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SectionKey = "account" | "students" | "notifications" | "security" /* | "billing" */;

const sidebarItems: { label: string; icon: React.ElementType; key: SectionKey }[] = [
  { label: "Account Overview", icon: User, key: "account" },
  { label: "Student Details", icon: ShieldCheck, key: "students" },
  { label: "Notifications", icon: Bell, key: "notifications" },
  { label: "Security & Privacy", icon: Lock, key: "security" },
  // { label: "Billing & Subscriptions", icon: CreditCard, key: "billing" },
];

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<SectionKey>("account");

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            Profile & Settings
          </h1>
          <p className="text-slate-500 mt-1">Manage your account preferences, notifications, and student details.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-10 sm:h-12 px-4 sm:px-6 font-bold gap-2 text-sm">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 shadow-lg shadow-indigo-100 font-bold gap-2 text-sm">
            Save All Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Sidebar Nav for Settings */}
        <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
          {sidebarItems.map((item, i) => (
            <div 
              key={i}
              onClick={() => setActiveSection(item.key)}
              className={cn("flex items-center justify-between p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-200 group min-w-[140px] lg:min-w-0", 
                activeSection === item.key ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white border border-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", activeSection === item.key ? "text-white" : "text-slate-400 group-hover:text-indigo-600")} />
                <span className="text-sm font-bold tracking-tight">{item.label}</span>
              </div>
              <ChevronRight className={cn("w-4 h-4", activeSection === item.key ? "text-white/60" : "text-slate-300 group-hover:text-indigo-300")} />
            </div>
          ))}
        </div>

        {/* Main Settings Content */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">

          {/* ====== ACCOUNT OVERVIEW ====== */}
          {activeSection === "account" && (
            <motion.div key="account" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-8">
              {/* Profile Header */}
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="relative group">
                    <Avatar className="h-32 w-32 border-8 border-slate-50 shadow-sm ring-1 ring-slate-100 group-hover:ring-indigo-200 transition-all duration-300">
                      <AvatarImage src="" />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-1 right-1 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:bg-indigo-600 hover:text-white transition-all">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Mukesh Patel</h2>
                      <Badge className="bg-indigo-50 text-indigo-600 font-black text-[10px] uppercase tracking-widest border-none px-3 py-1 w-fit mx-auto md:mx-0">Premium Parent Plan</Badge>
                    </div>
                    <p className="text-slate-500 font-medium mb-6">Parent ID: #P-2024098 â€¢ Joined Jan 2026</p>
                    <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><Mail className="w-4 h-4 text-indigo-500" /> Mukesh.patel@example.com</div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><Phone className="w-4 h-4 text-indigo-500" /> +91 98765 43210</div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-bold"><MapPin className="w-4 h-4 text-indigo-500" /> Surat, India</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Form Sections */}
              <Tabs defaultValue="account-info" className="w-full space-y-8">
                <TabsList className="bg-slate-50 p-1.5 rounded-2xl border border-slate-100 h-auto sm:h-14 flex items-center justify-start gap-1 w-full sm:w-fit overflow-x-auto">
                  <TabsTrigger value="account-info" className="rounded-xl px-4 sm:px-10 h-10 sm:h-11 font-bold text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">Account Info</TabsTrigger>
                  <TabsTrigger value="my-students" className="rounded-xl px-4 sm:px-10 h-10 sm:h-11 font-bold text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">My Students</TabsTrigger>
                  <TabsTrigger value="notif-prefs" className="rounded-xl px-4 sm:px-10 h-10 sm:h-11 font-bold text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all">Notifications</TabsTrigger>
                </TabsList>

                <TabsContent value="account-info" className="space-y-8 mt-0">
                  <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-xl font-bold text-slate-900">Personal Information</CardTitle>
                      <CardDescription>Update your contact and residential details.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label className="font-bold text-slate-700">Full Name</Label>
                          <Input defaultValue="Mukesh Patel" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-bold text-slate-700">Email Address</Label>
                          <Input defaultValue="Mukesh.patel@example.com" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-bold text-slate-700">Phone Number</Label>
                          <Input defaultValue="+91 98765 43210" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <Label className="font-bold text-slate-700">Secondary Phone</Label>
                          <Input placeholder="+91 000 000 000" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2 pt-4">
                        <Label className="font-bold text-slate-700">Permanent Address</Label>
                        <Input defaultValue="123 Laxmi Apartment, Surat, India" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
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

                <TabsContent value="my-students" className="space-y-8 mt-0">
                  <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-xl font-bold text-slate-900">Linked Students</CardTitle>
                      <CardDescription>Students associated with your parent account.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      {[
                        { name: "Vikas Patel", grade: "Grade 10-A", id: "2024098", score: "92.4%", avatar: "VP" },
                      ].map((student, i) => (
                        <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-100 hover:bg-indigo-50/30 transition-all">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-14 w-14 border-4 border-white shadow-sm">
                              <AvatarImage src={``} />
                              <AvatarFallback>VP</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-slate-900 text-lg">{student.name}</p>
                              <p className="text-xs text-slate-500 font-medium">{student.grade} â€¢ ID: {student.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Overall</p>
                              <p className="text-lg font-black text-indigo-600">{student.score}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300" />
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full h-14 rounded-2xl border-dashed border-slate-200 text-slate-500 font-bold gap-2 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                        <Plus className="w-4 h-4" /> Add Another Student
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notif-prefs" className="space-y-8 mt-0">
                  <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-xl font-bold text-slate-900">Quick Notification Preferences</CardTitle>
                      <CardDescription>Toggle key alerts on or off.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      {[
                        { label: "Homework Reminders", desc: "Get notified about new assignments and deadlines", icon: BookOpen, defaultOn: true },
                        { label: "Attendance Alerts", desc: "Receive alerts when your child is marked absent", icon: Calendar, defaultOn: true },
                        { label: "Exam Results", desc: "Be notified when exam results are published", icon: GraduationCap, defaultOn: true },
                      ].map((pref, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600">
                              <pref.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{pref.label}</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pref.desc}</p>
                            </div>
                          </div>
                          <Switch defaultChecked={pref.defaultOn} />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}

          {/* ====== STUDENT DETAILS ====== */}
          {activeSection === "students" && (
            <motion.div key="students" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-8">
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                    Student Details
                  </CardTitle>
                  <CardDescription>View and manage details for linked students.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
                    <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                      <AvatarImage src="" />
                      <AvatarFallback>VP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Vikas Patel</h3>
                      <p className="text-sm text-slate-500 font-medium">Grade 10-A â€¢ Roll No. 15 â€¢ ID: 2024098</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Student Name</Label>
                      <Input defaultValue="Vikas Patel" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Date of Birth</Label>
                      <Input defaultValue="15 March 2012" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Class & Section</Label>
                      <Input defaultValue="Grade 10 - Section A" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Roll Number</Label>
                      <Input defaultValue="15" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Blood Group</Label>
                      <Input defaultValue="B+" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Transport Mode</Label>
                      <Input defaultValue="School Bus - Route 4" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold text-slate-700">Allergies / Medical Notes</Label>
                    <Input defaultValue="None" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-bold text-slate-900">Emergency Contact</CardTitle>
                  <CardDescription>Contacts to reach in case of emergency.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Contact Name</Label>
                      <Input defaultValue="Mukesh Patel (Father)" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Contact Phone</Label>
                      <Input defaultValue="+91 98765 43210" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ====== NOTIFICATIONS ====== */}
          {activeSection === "notifications" && (
            <motion.div key="notifications" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-8">
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <Bell className="w-6 h-6 text-indigo-600" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Control what notifications you receive and how.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {[
                    { label: "Homework Reminders", desc: "Get notified about new assignments and upcoming deadlines", icon: BookOpen, defaultOn: true },
                    { label: "Attendance Alerts", desc: "Receive alerts when your child is marked absent or late", icon: Calendar, defaultOn: true },
                    { label: "Exam Results Published", desc: "Be notified when exam results are published", icon: GraduationCap, defaultOn: true },
                    { label: "Fee Payment Reminders", desc: "Get reminders before fee due dates", icon: CreditCard, defaultOn: true },
                    { label: "Leave Approval Status", desc: "Receive updates about submitted leave applications", icon: CheckCircle2, defaultOn: true },
                    { label: "Announcements", desc: "School-wide notices and announcements", icon: Info, defaultOn: true },
                    { label: "Behavior Reports", desc: "Updates about student behavior and conduct", icon: ShieldAlert, defaultOn: false },
                    { label: "Health Alerts", desc: "Notifications about health checks and medical updates", icon: Plus, defaultOn: false },
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600">
                          <pref.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{pref.label}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pref.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked={pref.defaultOn} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-lg font-bold text-slate-900">Delivery Method</CardTitle>
                  <CardDescription>Choose how you want to receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {[
                    { label: "Email Notifications", desc: "Receive notifications via email", icon: Mail, defaultOn: true },
                    { label: "SMS Notifications", desc: "Receive notifications via SMS to your phone", icon: Phone, defaultOn: false },
                    { label: "Push Notifications", desc: "In-app and browser push notifications", icon: Bell, defaultOn: true },
                  ].map((method, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-emerald-600">
                          <method.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{method.label}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{method.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked={method.defaultOn} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ====== SECURITY & PRIVACY ====== */}
          {activeSection === "security" && (
            <motion.div key="security" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-8">
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-indigo-600" />
                    Security & Privacy
                  </CardTitle>
                  <CardDescription>Manage your password, two-factor authentication, and privacy settings.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="space-y-2">
                    <Label className="font-bold text-slate-700">Current Password</Label>
                    <Input type="password" defaultValue="password123" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">New Password</Label>
                      <Input type="password" placeholder="Enter new password" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold text-slate-700">Confirm New Password</Label>
                      <Input type="password" placeholder="Re-enter new password" className="h-12 rounded-xl border-slate-100 bg-slate-50" />
                    </div>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-8 font-bold shadow-lg shadow-indigo-100">
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-bold text-slate-900">Security Options</CardTitle>
                  <CardDescription>Additional security measures for your account.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {[
                    { label: "Two-Factor Authentication", desc: "Add an extra layer of security with 2FA", icon: KeyRound, defaultOn: false },
                    { label: "Login Alerts", desc: "Get notified of new logins to your account", icon: ShieldAlert, defaultOn: true },
                    { label: "Session Timeout", desc: "Automatically log out after 30 minutes of inactivity", icon: History, defaultOn: true },
                  ].map((opt, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600">
                          <opt.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{opt.label}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{opt.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked={opt.defaultOn} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-bold text-slate-900">Privacy</CardTitle>
                  <CardDescription>Control who can see your information.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {[
                    { label: "Show Profile to Teachers", desc: "Allow teachers to view your contact details", icon: Eye, defaultOn: true },
                    { label: "Show Email on Directory", desc: "Display your email in the parent directory", icon: Mail, defaultOn: false },
                    { label: "Share Student Progress", desc: "Allow other guardians to view academic progress", icon: GraduationCap, defaultOn: false },
                  ].map((priv, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-emerald-600">
                          <priv.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{priv.label}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{priv.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked={priv.defaultOn} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ====== BILLING & SUBSCRIPTIONS (commented out for now) ====== */}
          {/* {activeSection === "billing" && (
            <motion.div key="billing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-8">
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-indigo-600" />
                    Billing & Subscriptions
                  </CardTitle>
                  <CardDescription>Manage your subscription plan and view billing history.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="p-6 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <Badge className="bg-white/20 text-white border-none font-black text-[10px] uppercase tracking-widest px-3 py-1 mb-4">Active Plan</Badge>
                      <h3 className="text-2xl font-black mb-1">Premium Parent Plan</h3>
                      <p className="text-indigo-100 text-sm font-medium mb-4">Full access to all features including detailed analytics, priority support, and real-time notifications.</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black">â‚¹2,499</span>
                        <span className="text-indigo-200 font-medium">/ year</span>
                      </div>
                      <p className="text-indigo-200 text-xs mt-2">Renews on Jan 15, 2027</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Real-time attendance tracking",
                      "Detailed academic analytics",
                      "Priority customer support",
                      "Unlimited notifications",
                      "Multi-student management",
                      "Export PDF reports",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-indigo-600" />
                    Billing History
                  </CardTitle>
                  <CardDescription>Your recent transactions and payment records.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-50">
                    {[
                      { desc: "Premium Parent Plan â€” Annual", date: "Jan 15, 2026", amount: "â‚¹2,499", status: "Paid" },
                      { desc: "Term 2 Tuition Fee â€” Vikas Patel", date: "Dec 01, 2025", amount: "â‚¹18,500", status: "Paid" },
                      { desc: "Transport Fee â€” Route 4", date: "Nov 15, 2025", amount: "â‚¹4,200", status: "Paid" },
                    ].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between py-5 group">
                        <div>
                          <p className="font-bold text-slate-900">{tx.desc}</p>
                          <p className="text-xs text-slate-400 font-medium mt-1">{tx.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-black text-slate-900">{tx.amount}</span>
                          <Badge className="bg-emerald-50 text-emerald-600 border-none font-black text-[9px] uppercase tracking-widest">{tx.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )} */}

        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
