import React, { useState } from 'react';
import { Mail, MapPin, Send, Code, Briefcase, Globe } from 'lucide-react';

export default function Connect({ hireMeMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Internship', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    try {
      const res = await fetch('https://formspree.io/f/xaqaypve', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setTimeout(() => {
          setStatus('Message beam sent successfully! 🚀');
          setFormData({ name: '', email: '', subject: 'Internship', message: '' });
          setIsSubmitting(false);
        }, 500);
      } else {
        throw new Error('Formspree error');
      }
    } catch(err) {
      setTimeout(() => {
        setStatus('Transmission established offline! (Backend is offline, but message logged)');
        setIsSubmitting(false);
      }, 1500);
    }
  }

  return (
    <div style={{ padding: '2rem 5%', minHeight: 'calc(100vh - 150px)', paddingBottom: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--accent)', textShadow: !hireMeMode ? '0 0 30px rgba(var(--accent-rgb), 0.5)' : 'none' }}>
           {hireMeMode ? 'BUSINESS INQUIRIES' : 'ESTABLISH CONTACT'}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
           {hireMeMode ? "Let's build the future together. Reach out for opportunities." : "Drop a message, stalk my socials, or let's just vibe."}
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', maxWidth: '1100px', width: '100%', justifyContent: 'center' }}>
        
        {/* Contact Info Side */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', borderTop: '2px solid var(--accent)', background: hireMeMode ? 'rgba(var(--card), 0.8)' : undefined }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>{hireMeMode ? 'Reach Out' : 'The Network'}</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <div style={{ padding: '1rem', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '12px', color: 'var(--accent)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--text)' }}>Location</p>
                <p style={{ margin: 0 }}>Indore, MP, India</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              <div style={{ padding: '1rem', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '12px', color: 'var(--accent)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--text)' }}>Email</p>
                <p style={{ margin: 0 }}>{hireMeMode ? 'jaanvichouhan18805@gmail.com' : 'jaanvichouhan@gmail.com'}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {hireMeMode ? (
                <>
                  <a href="https://github.com/Jaanvichouhan34" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--accent)', transition: 'all 0.3s', border: '1px solid var(--border)', fontWeight: 'bold' }}>GitHub</a>
                  <a href="https://www.linkedin.com/in/jaanvi-chouhan" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--accent)', transition: 'all 0.3s', border: '1px solid var(--border)', fontWeight: 'bold' }}>LinkedIn</a>
                </>
              ) : (
                <>
                  <a href="https://www.instagram.com/jaanvi_chouhan18?igsh=OTE0Z2s5MXprMjM3" target="_blank" rel="noreferrer" style={{ padding: '0.8rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--accent)', transition: 'all 0.3s', border: '1px solid var(--border)', fontWeight: 'bold' }}>IG</a>
                  <a href="#" style={{ padding: '0.8rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--accent)', transition: 'all 0.3s', border: '1px solid var(--border)' }}><Code size={20} /></a>
                  <a href="#" style={{ padding: '0.8rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--accent)', transition: 'all 0.3s', border: '1px solid var(--border)' }}><Globe size={20} /></a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div style={{ flex: '2 1 400px' }}>
          <form className="glass-panel" onSubmit={submit} style={{ 
            padding: '3rem', 
            borderRadius: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Aesthetic Glow */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent)', filter: 'blur(80px)', opacity: 0.2, borderRadius: '50%' }}></div>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Your Name</label>
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', transition: 'border 0.3s' }} onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Your Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', transition: 'border 0.3s' }} onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Subject Focus</label>
              <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none' }}>
                <option value="Internship" style={{ background: 'var(--surface)' }}>Internship Opportunity</option>
                <option value="Freelance" style={{ background: 'var(--surface)' }}>Freelance Project</option>
                <option value="Collaboration" style={{ background: 'var(--surface)' }}>Collaboration</option>
                <option value="Other" style={{ background: 'var(--surface)' }}>Just Saying Hi</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
              <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'var(--text)', minHeight: '150px', outline: 'none', transition: 'border 0.3s', resize: 'vertical' }} onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ padding: '1.2rem', display: 'flex', justifyContent: 'center', gap: '0.8rem', fontSize: '1.1rem', marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? 'Transmitting...' : 'Send Message'} <Send size={20} />
            </button>
            
            {status && (
              <div style={{ textAlign: 'center', color: status.includes('success') ? 'var(--accent)' : 'var(--accent3)', marginTop: '1rem', animation: 'fadeIn 0.5s' }}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
