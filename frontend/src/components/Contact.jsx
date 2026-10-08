import { AlertCircle, AtSign, CheckCircle2, Github, Linkedin, Loader2, Mail, MessageSquare, Send, Tag, User } from 'lucide-react';
import { useState } from 'react';
import { developerInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setStatusMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && (data.success || response.status === 200)) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to submit form. Please check your fields and try again.');
        if (data.data) {
          setFormErrors(data.data);
        }
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setSubmitStatus('error');
      setStatusMessage('Unable to reach Spring Boot server. Please ensure the backend service is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Build Something <span className="text-cyan-400">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or need architecture consultation? Send a message directly to my backend API.
          </p>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I am available for Java backend engineering roles, microservice migrations, and technical consulting.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                      <a href={`mailto:${developerInfo.email}`} className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        {developerInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Repository</div>
                      <a href={developerInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        github.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <a href={developerInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        linkedin.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Endpoint Pipeline Spec */}
              {/* <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono space-y-1 text-slate-300">
                <div className="text-cyan-400 font-semibold">API Pipeline Flow:</div>
                <div>React Form &rarr; POST /api/contact &rarr; Spring Boot &rarr; Mail Dispatch</div>
              </div> */}

            </div>
          </div>

          {/* Right Column: React Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-8 border border-slate-800 shadow-2xl">
              
              {/* Alert Message Banners */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold font-mono">Message Sent Successfully</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold font-mono">Submission Error</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                 
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        formErrors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors font-sans`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-rose-400 font-mono">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-cyan-400" />
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        formErrors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors font-sans`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-400 font-mono">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-cyan-400" />
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                      formErrors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                    } text-white text-sm outline-none transition-colors font-sans`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.subject}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, requirements, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                      formErrors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                    } text-white text-sm outline-none transition-colors font-sans resize-none`}
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-[11px] text-rose-400 font-mono">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 disabled:opacity-50 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending to Spring Boot API...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
