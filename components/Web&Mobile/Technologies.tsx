"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs,
  SiNodedotjs, SiPython, SiDjango, SiLaravel,
  SiDocker, SiKubernetes, SiAmazon, SiGooglecloud,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiFlutter, 
  SiGit, SiGithub, SiFigma,
} from "react-icons/si";

const Section = ({ title, description, children }: any) => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-8">{description}</p>
      {children}
    </div>
  </section>
);

const TechCard = ({ icon: Icon, name, color }: any) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="bg-white shadow-md p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center"
  >
    <Icon className={`text-5xl mb-4 ${color}`} />
    <p className="text-gray-800 font-semibold">{name}</p>
  </motion.div>
);

export default function Technologies() {
  return (
    <div className="bg-gray-50 pb-20">

      {/* HERO SECTION */}
       <section className="relative w-full overflow-hidden bg-gray-50 py-20 md:py-28">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-100 via-white to-blue-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT SIDE ICON + SHAPES */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Powering Digital Innovation With  
            <span className="text-blue-600"> Modern Technologies</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            We use industry-leading technologies to build fast, scalable, and
            secure software for web, mobile, and cloud platforms.
          </p>

          <button className="px-8 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition">
            Explore Technologies
          </button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/tech-hero.png" // Add your image inside /public folder
            alt="Technology Illustration"
            width={600}
            height={500}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>

      </div>
    </section>

      {/* FRONTEND SECTION */}
      <Section
        title="Frontend Development"
        description="We craft beautiful, scalable, and high-performance user interfaces using modern technologies."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiReact} name="React" color="text-sky-500" />
          <TechCard icon={SiNextdotjs} name="Next.js" color="text-black" />
          <TechCard icon={SiVuedotjs} name="Vue.js" color="text-green-500" />
          <TechCard icon={SiAngular} name="Angular" color="text-red-500" />
        </div>
      </Section>

      {/* BACKEND SECTION */}
      <Section
        title="Backend Development"
        description="Robust backend architecture built with reliable frameworks and programming languages."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiNodedotjs} name="Node.js" color="text-green-500" />
          <TechCard icon={SiPython} name="Python" color="text-yellow-500" />
          <TechCard icon={SiDjango} name="Django" color="text-green-800" />
          <TechCard icon={SiLaravel} name="Laravel" color="text-red-500" />
        </div>
      </Section>

      {/* CLOUD & DEVOPS SECTION */}
      <Section
        title="Cloud & DevOps"
        description="Optimized cloud infrastructure and CI/CD pipelines for scalable deployments."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiDocker} name="Docker" color="text-blue-500" />
          <TechCard icon={SiKubernetes} name="Kubernetes" color="text-blue-400" />
          <TechCard icon={SiAmazon} name="AWS" color="text-orange-500" />
          <TechCard icon={SiGooglecloud} name="Google Cloud" color="text-blue-600" />
        </div>
      </Section>

      {/* DATABASES SECTION */}
      <Section
        title="Databases"
        description="We ensure fast, secure, and scalable data storage using modern database technologies."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiMongodb} name="MongoDB" color="text-green-600" />
          <TechCard icon={SiPostgresql} name="PostgreSQL" color="text-blue-600" />
          <TechCard icon={SiMysql} name="MySQL" color="text-blue-400" />
          <TechCard icon={SiRedis} name="Redis" color="text-red-600" />
        </div>
      </Section>

      {/* MOBILE DEVELOPMENT */}
      <Section
        title="Mobile App Development"
        description="Cross-platform and native apps built with powerful mobile technologies."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiFlutter} name="Flutter" color="text-blue-500" />
          <TechCard icon={SiReact} name="React Native" color="text-sky-600" />
        </div>
      </Section>

      {/* TOOLS */}
      <Section
        title="Tools & Platforms"
        description="Reliable tools we use for design, version control, and project management."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <TechCard icon={SiGit} name="Git" color="text-orange-500" />
          <TechCard icon={SiGithub} name="GitHub" color="text-black" />
          <TechCard icon={SiFigma} name="Figma" color="text-purple-500" />
        </div>
      </Section>

    </div>
  );
}


