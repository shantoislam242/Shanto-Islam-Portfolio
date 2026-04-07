"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { Toaster, toast } from "react-hot-toast"
import Confetti from "react-confetti"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone, faList, faCalendarCheck } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Project",
    message: "",
  })

  // Provide your Web3Forms access key here via an environment variable:
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a0dc6d5d-9021-47bd-b111-e9969a3e1e5d";

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [])

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden"
    } else {
      document.body.style.overflowX = ""
    }
    return () => { document.body.style.overflowX = "" }
  }, [showConfetti])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message || !form.subject) {
      toast.error("Please fill all required fields before submitting.", {
        duration: 3000,
        position: "bottom-right",
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          subject: form.subject,
          message: form.message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setLoading(false)
        setSuccess(true)
        setForm({ name: "", email: "", phone: "", subject: "Project", message: "" })
        toast.success("Message sent successfully!", {
          duration: 3000,
          position: "bottom-right",
        })
        setShowConfetti(true)
        setTimeout(() => {
          setSuccess(false)
          setShowConfetti(false)
        }, 5000)
      } else {
        setLoading(false)
        toast.error("Failed to send message. Please replace the dummy access key.", {
          duration: 4000,
          position: "bottom-right",
        })
      }
    } catch (error) {
      setLoading(false)
      console.error(error)
      toast.error("Something went wrong. Please try again.", {
        duration: 3000,
        position: "bottom-right",
      })
    }
  }

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false)
  }, [])

  return (
    <div className="flex flex-col w-full relative z-0">
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}>
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-purple-400 text-xs" />
                  Name <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-black-100/50 backdrop-blur-sm py-3 px-4 placeholder:text-secondary/70 text-white text-sm rounded-lg outline-none border border-white/10 font-medium transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 hover:border-white/20"
                  required
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400 text-xs" />
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-black-100/50 backdrop-blur-sm py-3 px-4 placeholder:text-secondary/70 text-white text-sm rounded-lg outline-none border border-white/10 font-medium transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 hover:border-white/20"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-purple-400 text-xs" />
                  Phone Number <span className="text-gray-500 text-[10px]">(optional)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="bg-black-100/50 backdrop-blur-sm py-3 px-4 placeholder:text-secondary/70 text-white text-sm rounded-lg outline-none border border-white/10 font-medium transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 hover:border-white/20"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col relative w-full">
                <span className="text-white font-medium mb-2 text-sm flex items-center gap-2">
                  <FontAwesomeIcon icon={faList} className="text-purple-400 text-xs" />
                  Inquiry Type <span className="text-red-500">*</span>
                </span>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-black-100/50 backdrop-blur-sm py-3 px-4 text-white text-sm rounded-lg outline-none border border-white/10 font-medium transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 hover:border-white/20 w-full cursor-pointer appearance-none"
                  required
                >
                  <option value="Project" className="bg-[#100d25] text-white">Project Discussion</option>
                  <option value="Hiring" className="bg-[#100d25] text-white">Hiring / Job Opportunity</option>
                  <option value="General Inquiry" className="bg-[#100d25] text-white">General Inquiry</option>
                </select>
                <span className="absolute right-4 top-[38px] pointer-events-none text-purple-400 text-xs">
                  ▼
                </span>
              </label>
            </div>
          </div>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faComment} className="text-purple-400 text-xs" />
              Message <span className="text-red-500">*</span>
            </span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to achieve?"
              className="bg-black-100/50 backdrop-blur-sm py-3 px-4 placeholder:text-secondary/70 text-white text-sm rounded-lg outline-none border border-white/10 font-medium transition-all duration-300 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 hover:border-white/20 resize-none"
              required
            />
          </label>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7b46eb] py-3 px-10 rounded-lg text-white text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(145,94,255,0.4)] hover:shadow-[0_0_15px_rgba(145,94,255,0.6)] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin className="text-lg" />
              ) : success ? (
                <><span>Sent Successfully</span> <FontAwesomeIcon icon={faPaperPlane} className="text-xs" /></>
              ) : (
                <><span>Send Message</span> <FontAwesomeIcon icon={faPaperPlane} className="text-xs" /></>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
      </div>

      <motion.div 
        variants={slideIn("up", "tween", 0.3, 1)}
        className="w-full flex justify-center mt-12 pb-4"
      >
        <a
          href="https://calendly.com/shantoislam1357"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-[#915EFF] text-white hover:bg-[#915EFF] py-4 px-10 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(145,94,255,0.3)] hover:shadow-[0_0_20px_rgba(145,94,255,0.6)] group"
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="text-[#915EFF] group-hover:text-white transition-colors text-xl" />
          Schedule a Meeting
        </a>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
