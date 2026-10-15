"use client";

import Image from "next/image";
import { useState } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.sayjo.app&hl=en_IN";

const APP_STORE =
  "https://apps.apple.com/in/app/sayjo-mall-to-you-instantly/id6758011402";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-[#0f172a]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl">

          <div className="flex h-[70px] items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-7">

            {/* LOGO */}
            <a href="#" className="flex items-center gap-3">

              {/* Replace this with your actual logo */}
            <Image
    src="/logo.png"
    alt="Sayjo logo"
    width={100}
    height={70}
    priority
    className="h-30 w-29 rounded-sm object-contain"
  />

             

            </a>


            {/* DESKTOP NAVIGATION */}

            <nav className="hidden items-center gap-8 lg:flex">

              <a
                href="#home"
                className="text-sm font-medium text-slate-600 transition hover:text-[#2596be]"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition hover:text-[#2596be]"
              >
                About
              </a>

              <a
                href="#features"
                className="text-sm font-medium text-slate-600 transition hover:text-[#2596be]"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-600 transition hover:text-[#2596be]"
              >
                How it works
              </a>

            </nav>


            {/* DESKTOP CTA */}

            <div className="hidden items-center gap-3 lg:flex">

              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-600 transition hover:text-[#2596be]"
              >
                Get the App
              </a>

              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1e293b]"
              >
                Download
              </a>

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <span className="text-xl">×</span>
              ) : (
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-slate-700" />
                  <span className="block h-0.5 w-5 bg-slate-700" />
                  <span className="block h-0.5 w-5 bg-slate-700" />
                </div>
              )}
            </button>

          </div>


          {/* MOBILE NAVIGATION */}

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl lg:hidden">

              <div className="flex flex-col">

                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Features", "#features"],
                  ["How it works", "#how-it-works"],
                ].map(([title, href]) => (
                  <a
                    key={title}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    {title}
                  </a>
                ))}

                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-xl bg-[#2596be] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Download Sayjo
                </a>

              </div>

            </div>
          )}

        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden pt-16"
      >

        {/* Background blobs */}

        <div className="absolute left-[-250px] top-[180px] h-[500px] w-[500px] rounded-full bg-cyan-200/30 blur-[120px]" />

        <div className="absolute right-[-200px] top-[100px] h-[600px] w-[600px] rounded-full bg-blue-200/30 blur-[130px]" />


        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-24">


          {/* LEFT */}

          <div className="max-w-2xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 shadow-sm">

              <span className="flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>

              <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                Fast delivery from your favourite stores
              </span>

            </div>


            <h1 className="text-[48px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">

              Your favourite

              <span className="block text-[#2596be]">
                mall brands.
              </span>

              <span className="block">
                At your doorstep.
              </span>

            </h1>


            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Sayjo brings the shopping experience of your favourite malls
              directly to your doorstep. Discover brands, explore products,
              order in seconds and get fast delivery.
            </p>


            {/* BUTTONS */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#0f172a] px-6 py-4 text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <span className="text-2xl">▶</span>

                <span className="text-left">
                  <span className="block text-[9px] uppercase tracking-wide text-slate-400">
                    Get it on
                  </span>

                  <span className="text-sm font-semibold">
                    Google Play
                  </span>
                </span>

              </a>


              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-slate-900 shadow-xl shadow-slate-200 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <span className="text-2xl">●</span>

                <span className="text-left">
                  <span className="block text-[9px] uppercase tracking-wide text-slate-400">
                    Download on the
                  </span>

                  <span className="text-sm font-semibold">
                    App Store
                  </span>
                </span>

              </a>

            </div>


            {/* TRUST */}

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">

              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Nearby stores
              </span>

              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Fast delivery
              </span>

              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Easy checkout
              </span>

            </div>

          </div>


          {/* RIGHT - PHONE */}

       {/* RIGHT - SAYJO APP IMAGE */}
<div className="relative flex min-h-[620px] items-center justify-center">

  {/* Background glow */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[100px]" />

  {/* Floating order card */}
  <div className="absolute left-0 top-24 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur sm:block">

    <div className="flex items-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
        ✓
      </div>

      <div>
        <p className="text-sm font-bold">
          Order Confirmed
        </p>

        <p className="mt-0.5 text-xs text-slate-400">
          Your order is being prepared
        </p>
      </div>

    </div>

  </div>


  {/* Floating delivery card */}
  <div className="absolute bottom-24 right-0 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur sm:block">

    <div className="flex items-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-lg">
        🚴
      </div>

      <div>
        <p className="text-sm font-bold">
          On the way
        </p>

        <p className="mt-0.5 text-xs text-slate-400">
          Delivery in progress
        </p>
      </div>

    </div>

  </div>


  {/* Sayjo App Image */}
  <div className="relative z-10">

    <Image
      src="/sayjo-app.png"
      alt="Sayjo App"
      width={500}
      height={650}
      priority
      className="h-auto max-h-[650px] w-auto max-w-[90vw] object-contain drop-shadow-[0_35px_50px_rgba(15,23,42,0.25)]"
    />

  </div>

</div>
        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="relative bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2596be]">
                About Sayjo
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Shopping should be
                <span className="text-[#2596be]">
                  {" "}simple.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Sayjo connects you with your favourite brands and stores
                available at nearby malls. You get the convenience of
                online shopping with the products and brands you already
                love.
              </p>

              <p className="mt-5 max-w-xl leading-7 text-slate-500">
                Browse products, choose what you want, place your order
                and let Sayjo take care of getting it from the store to
                your doorstep.
              </p>


              <div className="mt-8">

                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#2596be] transition hover:gap-3"
                >
                  Start shopping
                  <span>→</span>
                </a>

              </div>

            </div>


            {/* Stats */}

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl bg-slate-50 p-7 sm:p-9">

                <div className="text-4xl font-bold text-[#2596be]">
                  60
                </div>

                <div className="mt-1 text-lg font-semibold">
                  Minutes
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fast delivery from nearby stores.
                </p>

              </div>


              <div className="mt-8 rounded-3xl bg-[#0f172a] p-7 text-white sm:p-9">

                <div className="text-4xl font-bold">
                  1
                </div>

                <div className="mt-1 text-lg font-semibold">
                  App
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Everything you need to shop.
                </p>

              </div>


              <div className="-mt-8 rounded-3xl bg-[#2596be] p-7 text-white sm:p-9">

                <div className="text-4xl font-bold">
                  24/7
                </div>

                <div className="mt-1 text-lg font-semibold">
                  Shopping
                </div>

                <p className="mt-3 text-sm leading-6 text-cyan-50">
                  Discover products whenever you want.
                </p>

              </div>


              <div className="rounded-3xl bg-slate-50 p-7 sm:p-9">

                <div className="text-4xl font-bold text-[#2596be]">
                  ∞
                </div>

                <div className="mt-1 text-lg font-semibold">
                  Choices
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Explore brands and products around you.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section id="features" className="bg-[#f8fafc] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2596be]">
              Why Sayjo
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need.
              <br />
              Nothing you dont.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              A simple shopping experience designed around speed,
              convenience and the brands you already love.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                text: "Get your favourite products delivered quickly from stores around you.",
              },
              {
                icon: "🛍️",
                title: "Favourite Brands",
                text: "Discover products from the brands and stores you already know.",
              },
              {
                icon: "📍",
                title: "Nearby Stores",
                text: "Sayjo connects you with stores available close to your location.",
              },
              {
                icon: "🔎",
                title: "Easy Discovery",
                text: "Find products and brands quickly with an intuitive shopping experience.",
              },
              {
                icon: "📦",
                title: "Track Your Order",
                text: "Stay updated throughout the journey from store to doorstep.",
              },
              {
                icon: "🔒",
                title: "Secure Shopping",
                text: "Enjoy a smooth checkout and reliable shopping experience.",
              },
            ].map((feature) => (

              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_60px_rgba(15,23,42,0.1)] sm:p-8"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl transition duration-300 group-hover:bg-[#2596be]">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section id="how-it-works" className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2596be]">
              How it works
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              From mall to doorstep
              <br />
              in three simple steps.
            </h2>

          </div>


          <div className="mt-16 grid gap-12 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Set your location",
                text: "Tell Sayjo where you want your order delivered and discover stores available near you.",
              },
              {
                number: "02",
                title: "Choose what you love",
                text: "Explore brands and products, select your favourites and add them to your cart.",
              },
              {
                number: "03",
                title: "Get it delivered",
                text: "Place your order and sit back while your products make their way to your doorstep.",
              },
            ].map((step) => (

              <div key={step.number} className="relative">

                <div className="text-7xl font-black tracking-tighter text-cyan-100">
                  {step.number}
                </div>

                <h3 className="mt-2 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD CTA
      ===================================================== */}

      <section className="px-6 pb-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[10px] bg-[#0f172a] px-7 py-20 sm:px-14 lg:px-20">

          {/* Decorations */}

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />


          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Download Sayjo
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Your next shopping trip
                <span className="text-cyan-400">
                  {" "}starts here.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                Download Sayjo and bring your favourite mall brands
                closer to home.
              </p>

            </div>


            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-slate-100"
              >
                Download for Android
              </a>

              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#2596be] px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#2187aa]"
              >
                Download for iPhone
              </a>

            </div>

          </div>

        </div>

      </section>




{/* JOIN OUR COMMUNITY */}
<section className="px-6 py-16 sm:py-20">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[10px] bg-gradient-to-br from-[#eaf8fc] via-white to-[#f3eaff] px-6 py-14 text-center sm:px-12 sm:py-20">

    <div className="relative mx-auto max-w-2xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2596be] shadow-lg shadow-slate-200/60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      </div>

     <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#2596be]">
  Join Our Community
</p>

<h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
  Be part of the{" "}
  <span className="text-[#2596be]">SAYJO Family.</span>
</h2>

<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
  Join our WhatsApp community to stay updated on new brands,
  exciting offers, shopping updates and everything happening
  at Sayjo.
</p>

      
<a
  href="https://chat.whatsapp.com/LioIPHewJeAKDHhwCSruFl"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-lg shadow-green-200/60 transition duration-300 hover:-translate-y-1 hover:bg-[#20BA5A] hover:shadow-xl"
>
  {/* WhatsApp icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
    <path d="M9 9a1 1 0 0 0-1 1c0 2 3 5 5 5a1 1 0 0 0 1-1l-1.5-1-1 1a5 5 0 0 1-2.5-2.5l1-1z" />
  </svg>

  Join Our WhatsApp Community
  <span aria-hidden="true">↗</span>
</a>


      <p className="mt-4 text-sm text-slate-500">
        Your favourite brands. Your shopping community.
      </p>

    </div>
  </div>
</section>




      


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* BRAND */}

            <div className="sm:col-span-2">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-sm text-[#26ace9] font-bold bg-black">
                  S
                </div>

                <div>

                  <div className="text-xl font-bold text-[#1ea5fc]">
                    SAYJO
                  </div>

                  <div className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                    Mall in your Palm
                  </div>

                </div>

              </div>

              <p className="mt-6 max-w-md leading-7 text-slate-500">
                Your favourite mall brands, delivered directly to your
                doorstep. Shop smarter with Sayjo.
              </p>


              <div className="mt-6 flex gap-3">

                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center rounded-xl bg-slate-100 px-4 text-xs font-semibold transition hover:bg-slate-200"
                >
                  Google Play
                </a>

                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center rounded-xl bg-slate-100 px-4 text-xs font-semibold transition hover:bg-slate-200"
                >
                  App Store
                </a>

              </div>

            </div>


            {/* COMPANY */}

            <div>

              <h4 className="font-bold">
                Company
              </h4>

              <div className="mt-5 space-y-4 text-sm text-slate-500">

                <a
                  href="#about"
                  className="block transition hover:text-[#2596be]"
                >
                  About
                </a>

                <a
                  href="#features"
                  className="block transition hover:text-[#2596be]"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="block transition hover:text-[#2596be]"
                >
                  How it works
                </a>

              </div>

            </div>

{/* FOLLOW US */}
<div>
  <h4 className="font-bold text-slate-950">
    Follow Us
  </h4>

  <div className="mt-5 space-y-4 text-sm text-slate-500">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/sayjo.official/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Sayjo on Instagram"
      className="flex items-center gap-3 transition hover:text-[#2596be]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>

      <span>Instagram</span>
      <span className="ml-auto">↗</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/sayjo/?originalSubdomain=in"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Sayjo on LinkedIn"
      className="flex items-center gap-3 transition hover:text-[#2596be]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>

      <span>LinkedIn</span>
      <span className="ml-auto">↗</span>
    </a>

  </div>
</div>













          </div>


          {/* BOTTOM */}

          <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Alisa Avenue Private Limited. All rights reserved.
            </p>

            <p>
              Made for a better shopping experience.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}
