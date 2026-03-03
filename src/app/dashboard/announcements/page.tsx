"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Search, 
  Filter, 
  CalendarDays, 
  Paperclip, 
  ChevronRight, 
  Bell, 
  Info, 
  AlertTriangle,
  Award,
  BookOpen,
  History,
  Tag
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const announcements = [
  { id: 1, title: "Winter Vacation Schedule 2024", date: "Oct 15, 2024", priority: "High", category: "Calendar", desc: "The school will remain closed for winter vacation from Dec 15 to Jan 05. Detailed schedule is attached for each grade.", author: "School Admin", icon: CalendarDays, color: "rose" },
  { id: 2, title: "Annual Science Fair Participation", date: "Oct 12, 2024", priority: "Medium", category: "Event", desc: "Registrations for the Annual Science Fair are now open. Interested students can sign up by Friday.", author: "Dept of Science", icon: Award, color: "amber" },
  { id: 3, title: "Mid-term Assessment Report", date: "Oct 08, 2024", priority: "High", category: "Academic", desc: "Mid-term reports for all Grade 10 students have been published in the portal. Please review and sign.", author: "Academic Office", icon: BookOpen, color: "indigo" },
  { id: 4, title: "Revised Transport Route (B)", date: "Sep 30, 2024", priority: "Low", category: "Transport", desc: "Route B will have a minor change in the morning pickup time from Oct 01. Please check the new schedule.", author: "Transport Manager", icon: Info, color: "emerald" },
];

export default function AnnouncementsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Megaphone className="w-8 h-8 text-indigo-600" />
            Announcements & News
          </h1>
          <p className="text-slate-500 mt-1">Stay updated with the latest notifications from school administration.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <History className="w-4 h-4" />
            Archived News
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-6 shadow-lg shadow-indigo-100 font-bold gap-2">
            <Bell className="w-4 h-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative col-span-1 md:col-span-3">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <Input 
            placeholder="Search announcements..." 
            className="pl-12 h-12 rounded-2xl border-none shadow-md shadow-slate-100 bg-white focus-visible:ring-indigo-600"
          />
        </div>
        <Button variant="outline" className="h-12 rounded-2xl border-none shadow-md shadow-slate-100 bg-white font-bold gap-2">
          <Filter className="w-4 h-4" /> Filter By
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {announcements.map((ann, i) => (
            <motion.div 
              key={ann.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-3 rounded-2xl text-white transition-transform group-hover:scale-110", 
                          ann.color === "rose" ? "bg-rose-500 shadow-lg shadow-rose-100" : 
                          ann.color === "amber" ? "bg-amber-500 shadow-lg shadow-amber-100" : 
                          ann.color === "indigo" ? "bg-indigo-500 shadow-lg shadow-indigo-100" : "bg-emerald-500 shadow-lg shadow-emerald-100"
                        )}>
                          <ann.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{ann.category}</p>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{ann.title}</h3>
                        </div>
                      </div>
                      <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none px-3 py-1.5", 
                        ann.priority === "High" ? "bg-rose-50 text-rose-600 animate-pulse" : 
                        ann.priority === "Medium" ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"
                      )}>
                        {ann.priority} Priority
                      </Badge>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      {ann.desc}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border-2 border-white shadow-sm ring-1 ring-slate-100">
                          <AvatarFallback className="bg-slate-100 font-bold text-slate-500">{ann.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-none">{ann.author}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ann.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" className="h-10 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 font-bold gap-2">
                          <Paperclip className="w-4 h-4" />
                          Attachment
                        </Button>
                        <Button className="h-10 px-6 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-100 transition-all">
                          Read Full
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div className="text-center py-8">
            <Button variant="ghost" className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:bg-indigo-50 rounded-xl px-12 py-6">
              View All Announcements <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Urgent Alert Widget */}
          <Card className="border-none shadow-xl shadow-rose-200/40 rounded-3xl bg-rose-600 text-white overflow-hidden p-8 relative group">
            <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2">Emergency Alert</h3>
              <p className="text-rose-100 text-sm leading-relaxed mb-8">
                School will dismiss 2 hours early today (Oct 16) due to extreme weather warnings. Buses will depart at 1:30 PM.
              </p>
              <Button className="w-full bg-white text-rose-600 hover:bg-rose-50 font-black h-12 rounded-xl text-xs uppercase tracking-widest">
                Acknowledge Alert
              </Button>
            </div>
          </Card>

          {/* Categories Widget */}
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">Categories</CardTitle>
              <CardDescription>Filter news by tag.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { label: "Academic", count: 12, color: "indigo" },
                { label: "Events", count: 8, color: "amber" },
                { label: "Transport", count: 4, color: "emerald" },
                { label: "Sports", count: 15, color: "rose" },
                { label: "Hostel", count: 3, color: "violet" },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", 
                      cat.color === "indigo" ? "bg-indigo-500" : 
                      cat.color === "amber" ? "bg-amber-500" : 
                      cat.color === "emerald" ? "bg-emerald-500" : 
                      cat.color === "rose" ? "bg-rose-500" : "bg-violet-500"
                    )} />
                    <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{cat.label}</span>
                  </div>
                  <Badge variant="outline" className="h-6 border-slate-100 rounded-lg text-[9px] font-black text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">{cat.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Support Widget */}
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-indigo-50 border border-indigo-100 p-8 text-center group">
            <div className="p-4 bg-white rounded-3xl shadow-sm w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Megaphone className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Need Help?</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              If you have questions about any announcement, please reach out to our support team.
            </p>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black h-12 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-indigo-100">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
