"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Download, 
  Plus, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  Thermometer, 
  Apple, 
  Droplet, 
  ChevronRight,
  Info,
  History,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const medicalHistory = [
  { id: 1, type: "Routine Checkup", date: "Aug 12, 2024", doctor: "Dr. Sarah Wilson", report: "Fit & Healthy", status: "completed" },
  { id: 2, type: "Flu Vaccination", date: "Sep 05, 2024", doctor: "Dr. Robert Smith", report: "Dose 1 Administered", status: "completed" },
  { id: 3, type: "Dental Exam", date: "Oct 15, 2024", doctor: "Dr. Emily Brown", report: "No Cavities Found", status: "pending" },
];

export default function HealthPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <HeartPulse className="w-8 h-8 text-rose-500" />
            Health Records
          </h1>
          <p className="text-slate-500 mt-1">Monitor Vikas's medical history, vaccinations, and fitness alerts.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <Download className="w-4 h-4" />
            Medical History PDF
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-xl h-12 px-6 shadow-lg shadow-rose-100 font-bold gap-2">
            <Plus className="w-4 h-4" />
            Add Health Alert
          </Button>
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 rounded-3xl p-6 flex items-start gap-4 shadow-sm shadow-rose-100/50">
        <div className="p-2 bg-rose-500 rounded-xl text-white">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="text-rose-900 font-bold text-lg leading-none mb-2">Active Health Alert: Seasonal Allergies</h4>
          <p className="text-rose-700 text-sm leading-relaxed">
            Vikas is currently experiencing minor seasonal allergies. The school medical officer has been informed to provide the prescribed medication as per the records.
          </p>
        </div>
        <Button variant="ghost" className="h-8 rounded-lg text-rose-600 font-black text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-sm">
          Acknowledge
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Stats */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-6">
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="h-16 w-16 border-4 border-slate-50 shadow-sm ring-1 ring-slate-100">
                <AvatarImage src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=100" />
                <AvatarFallback>LD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-none mb-1">Vikas Doe</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Grade 10-A • 15 Years</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Droplet className="w-3 h-3 text-rose-500" /> Blood Group</p>
                <p className="text-2xl font-black text-slate-900">B Positive</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Thermometer className="w-3 h-3 text-amber-500" /> Height/Weight</p>
                <p className="text-lg font-black text-slate-900">172cm / 64kg</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Apple className="w-3 h-3 text-emerald-500" /> Diet Plan</p>
                <p className="text-lg font-black text-slate-900">Regular Veg</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-indigo-500" /> Vaccinated</p>
                <p className="text-lg font-black text-slate-900">Up to date</p>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-indigo-600 text-white overflow-hidden p-6 relative group">
            <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <h4 className="text-lg font-bold mb-4 relative z-10">Allergies & Sensitivities</h4>
            <div className="space-y-3 relative z-10">
              {['Peanuts', 'Dust Mites', 'Penicillin'].map((allergy, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <Info className="w-4 h-4 text-indigo-200" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{allergy}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* History Table */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden flex flex-col h-full">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 p-8">
            <div>
              <CardTitle className="text-xl font-bold text-slate-900">Medical History</CardTitle>
              <CardDescription>Chronological log of school clinic visits and checkups.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-lg h-8 text-[10px] font-black uppercase tracking-widest border-slate-100">Filter By Date</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="divide-y divide-slate-50">
              {medicalHistory.map((item, i) => (
                <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", 
                      item.status === "completed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {item.type.includes('Checkup') ? <Activity className="w-6 h-6" /> : <Stethoscope className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{item.type}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-indigo-600">{item.doctor}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Report Outcome</p>
                      <p className="text-sm font-bold text-slate-700">{item.report}</p>
                    </div>
                    <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none", 
                      item.status === "completed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {item.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="rounded-full text-slate-300 group-hover:text-indigo-600 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50/50">
              <Button variant="ghost" className="w-full text-indigo-600 font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 rounded-xl py-6">
                View Archived Records (2020-2023) <History className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
