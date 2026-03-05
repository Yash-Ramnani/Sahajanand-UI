"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  CalendarDays,
  Clock,
  MapPin,
  ChevronRight,
  Search,
  Filter,
  History,
  Image as ImageIcon,
  PartyPopper,
  Trophy,
  BookOpen,
  Music,
  Users,
  X,
  ChevronLeft,
  Maximize2,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// ─── Mock Data ──────────────────────────────────────────────────────────────

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "Mar 25, 2026",
    time: "05:00 PM",
    description: "Grand annual day featuring cultural performances, prize distribution and chief guest address.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    category: "Cultural",
    color: "indigo",
    location: "School Auditorium",
  },
  {
    id: 2,
    title: "Inter-School Science Exhibition",
    date: "Apr 05, 2026",
    time: "09:00 AM",
    description: "Students showcase innovative science projects and compete at inter-school level.",
    image: "/images/event-science.svg",
    category: "Academic",
    color: "amber",
    location: "Science Block",
  },
  {
    id: 3,
    title: "Spring Sports Meet",
    date: "Apr 12, 2026",
    time: "08:00 AM",
    description: "Annual athletics and track events with house-wise competition and medals ceremony.",
    image: "/images/event-sports.svg",
    category: "Sports",
    color: "emerald",
    location: "Sports Ground",
  },
  {
    id: 4,
    title: "Music & Dance Festival",
    date: "Apr 20, 2026",
    time: "04:00 PM",
    description: "An evening of classical, folk and contemporary performances by talented students.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    category: "Cultural",
    color: "rose",
    location: "Open Air Theatre",
  },
];

const pastEvents = [
  {
    id: 5,
    title: "Republic Day 2026",
    date: "Jan 26, 2026",
    description: "Flag hoisting, parade, and patriotic cultural programme.",
    image: "/images/event-republic-day.svg",
    category: "National",
    color: "amber",
  },
  {
    id: 6,
    title: "Winter Carnival 2025",
    date: "Dec 20, 2025",
    description: "Fun-filled carnival with games, food stalls, and entertainment.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    category: "Festival",
    color: "rose",
  },
  {
    id: 7,
    title: "Math Olympiad Finals",
    date: "Nov 15, 2025",
    description: "District-level math olympiad hosted at our school campus.",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&q=80",
    category: "Academic",
    color: "indigo",
  },
];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "Annual Day 2025", event: "Annual Day", tag: "Cultural" },
  { id: 2, src: "/images/event-sports.svg", alt: "Sports Day Athletics", event: "Sports Meet", tag: "Sports" },
  { id: 3, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", alt: "Winter Carnival Crowd", event: "Winter Carnival", tag: "Festival" },
  { id: 4, src: "/images/event-science.svg", alt: "Science Exhibition Projects", event: "Science Fair", tag: "Academic" },
  { id: 5, src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80", alt: "Music Performance", event: "Music Fest", tag: "Cultural" },
  { id: 6, src: "/images/event-republic-day.svg", alt: "Republic Day Parade", event: "Republic Day", tag: "National" },
  { id: 7, src: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&q=80", alt: "Math Olympiad", event: "Olympiad", tag: "Academic" },
  { id: 8, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", alt: "Graduation Ceremony", event: "Graduation", tag: "Ceremony" },
  { id: 9, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", alt: "Art Workshop", event: "Art Workshop", tag: "Cultural" },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function cn(...inputs: unknown[]) {
  return inputs.filter(Boolean).join(" ");
}

function colorBg(color: string) {
  const map: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
    rose: "bg-rose-50 text-rose-600",
    blue: "bg-blue-50 text-blue-600",
  };
  return map[color] ?? "bg-slate-50 text-slate-600";
}

function colorAccent(color: string) {
  const map: Record<string, string> = {
    indigo: "bg-indigo-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    blue: "bg-blue-500",
  };
  return map[color] ?? "bg-slate-500";
}

function categoryIcon(category: string) {
  switch (category) {
    case "Cultural": return Music;
    case "Academic": return BookOpen;
    case "Sports": return Trophy;
    case "Festival": return PartyPopper;
    case "National": return Users;
    case "Ceremony": return Trophy;
    default: return CalendarDays;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ─── Component ──────────────────────────────────────────────────────────────

type TabKey = "events" | "gallery";
type GalleryFilter = "All" | "Cultural" | "Sports" | "Academic" | "Festival" | "National" | "Ceremony";

export default function EventGalleryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("events");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("All");

  const filteredGallery =
    galleryFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.tag === galleryFilter);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-12"
    >
      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            Events &amp; Gallery
          </h1>
          <p className="text-slate-500 mt-1">Browse upcoming events, relive past celebrations, and explore event photos.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-10 sm:h-12 px-4 sm:px-6 font-bold gap-2 text-sm">
            <History className="w-4 h-4" />
            Past Events
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 shadow-lg shadow-indigo-100 font-bold gap-2 text-sm">
            <ImageIcon className="w-4 h-4" />
            View Album
          </Button>
        </div>
      </div>

      {/* ── Tab Switcher ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-md shadow-slate-100 w-fit">
        {(["events", "gallery"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200",
              activeTab === tab
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
            )}
          >
            {tab === "events" ? "Events" : "Gallery"}
          </button>
        ))}
      </div>

      {/* ── Events Tab ───────────────────────────────────────────────────── */}
      {activeTab === "events" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Upcoming Events */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Upcoming Events</h2>
              <Badge className="bg-indigo-50 text-indigo-600 border-none font-black text-[10px] uppercase tracking-widest px-3 py-1.5">
                {upcomingEvents.length} Upcoming
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {upcomingEvents.map((event, i) => {
                const Icon = categoryIcon(event.category);
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-44 sm:h-52 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge
                          className={cn(
                            "absolute top-4 left-4 rounded-lg font-black text-[9px] uppercase tracking-widest border-none px-3 py-1.5 text-white",
                            colorAccent(event.color)
                          )}
                        >
                          {event.category}
                        </Badge>
                      </div>

                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {event.time}
                          </span>
                          {event.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {event.location}
                            </span>
                          )}
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={cn("p-1.5 rounded-lg", colorBg(event.color))}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.category}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-indigo-600 font-bold text-xs gap-1 hover:bg-indigo-50 rounded-lg">
                            Details <ChevronRight className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Past Events */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Past Events</h2>
              <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[10px] uppercase tracking-widest px-3 py-1.5">
                {pastEvents.length} Completed
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {pastEvents.map((event, i) => {
                const Icon = categoryIcon(event.category);
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-300">
                      <div className="relative h-36 sm:h-40 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <Badge
                          className={cn(
                            "absolute top-3 left-3 rounded-lg font-black text-[9px] uppercase tracking-widest border-none px-2.5 py-1 text-white",
                            colorAccent(event.color)
                          )}
                        >
                          {event.category}
                        </Badge>
                      </div>

                      <CardContent className="p-4 sm:p-5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{event.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {event.date}
                          </span>
                          <Button variant="ghost" size="sm" className="text-indigo-600 font-bold text-xs gap-1 hover:bg-indigo-50 rounded-lg h-7 px-2">
                            View <ChevronRight className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </motion.div>
      )}

      {/* ── Gallery Tab ──────────────────────────────────────────────────── */}
      {activeTab === "gallery" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {(["All", "Cultural", "Sports", "Academic", "Festival", "National", "Ceremony"] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setGalleryFilter(tag)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200",
                  galleryFilter === tag
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-100"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredGallery.map((img, i) => (
              <motion.div
                key={img.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-300 aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <p className="text-white font-bold text-sm leading-tight">{img.alt}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-white/20 text-white border-none text-[9px] font-black uppercase tracking-widest px-2 py-0.5 backdrop-blur-sm">
                        {img.tag}
                      </Badge>
                      <span className="text-white/70 text-[10px] font-medium">{img.event}</span>
                    </div>
                  </div>
                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl mb-4">
                <ImageIcon className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-400 font-bold text-sm">No photos found for this category.</p>
            </div>
          )}
        </motion.div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
              );
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={filteredGallery[lightboxIndex]?.src}
            alt={filteredGallery[lightboxIndex]?.alt}
            className="max-h-[80vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredGallery.length : null
              );
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-8 text-center text-white">
            <p className="font-bold text-lg">{filteredGallery[lightboxIndex]?.alt}</p>
            <p className="text-white/60 text-sm mt-1">{filteredGallery[lightboxIndex]?.event}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
