# Project: Boise Water Damage Pros Lead Gen Site

## Project Overview
Building an autonomous local lead generation website for water damage restoration services in Boise, Idaho. This serves as a test case for AI-automated business development.

---

## Key Decisions & Strategy

### Why Water Damage Restoration?
- Emergency-driven (immediate need = higher conversion)
- Insurance-paid jobs (easier to sell to contractors)
- High lead value: $75-150 per qualified lead
- Less spammed than plumbing/HVAC per research

### Why Boise, Idaho?
- Population ~235K (ideal 75K-250K range)
- Fast-growing metro (new construction + aging infrastructure)
- Cold winters = frozen pipes = water damage
- Medium competition (not oversaturated)

### Revenue Model
- Phase 1: Free trial leads to prove value
- Phase 2: Pay-per-lead ($75-100/lead) OR monthly retainer ($500-1000/mo)
- Target: 10-15 leads/month = $750-1500/mo revenue

---

## Competitive Research Insights

### What Winners Do (Hook Agency, RestorationBoost, etc.):
1. **Mobile-first design** - Emergency searches happen on phones
2. **Trust signals everywhere** - Badges, testimonials, certifications
3. **CTA above the fold** - Don't make people scroll in emergencies
4. **Insurance acceptance** - Prominent "We Work With Insurance"
5. **24/7 messaging** - Water damage doesn't wait
6. **Fast response promise** - "60 min response time" etc.
7. **Chat interface** - Immediate engagement for panicked homeowners

### SEO Strategy Learned:
- Target: "water damage repair [city]", "emergency flood cleanup [city]"
- Local Map Pack optimization critical
- Service pages: Water Damage, Mold Remediation, Flood Cleanup, Sewage Backup
- Location pages for surrounding areas (Meridian, Nampa, Eagle)

---

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Hosting:** Vercel (free tier)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Chat:** Custom WebSocket or polling-based chat interface
- **Voice:** ElevenLabs (future integration)
- **Phone:** Twilio (future integration)
- **Analytics:** Vercel Analytics + custom lead tracking

---

## Site Structure

```
/
├── / (Homepage - Hero + Emergency CTA + Trust signals)
├── /services/water-damage (Service page)
├── /services/mold-remediation (Service page)
├── /services/flood-cleanup (Service page)
├── /about (About page with trust signals)
├── /contact (Contact form)
├── /chat (Live chat interface)
└── /api/
    ├── /chat (Chat API endpoint)
    └── /lead (Lead submission endpoint)
```

---

## Design System

### Colors (Borrowed from competitor analysis + best practices):
- **Primary:** #0066CC (Trust blue - emergency services standard)
- **Secondary:** #FF6B35 (Urgency orange - CTAs)
- **Background:** #FFFFFF (Clean white)
- **Text:** #1A1A1A (Near black)
- **Accent:** #22C55E (Success green - insurance, checkmarks)

### Typography:
- **Headings:** Inter (clean, professional)
- **Body:** Inter (readable at small sizes)

### Mobile-First Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Key Features

### 1. Hero Section
- Emergency-focused headline
- Phone number + Chat CTA prominent
- "24/7 Emergency Service" badge
- "We Work With Insurance" trust signal
- Mobile: Click-to-call button sticky at bottom

### 2. Chat Interface
- Floating chat bubble (bottom right)
- Auto-prompt after 5 seconds: "Need emergency help?"
- My responses handle:
  - Urgency triage (is this an emergency?)
  - Service qualification (water damage type)
  - Insurance check
  - Contact collection
  - Lead routing to contractors

### 3. Lead Capture Form
- Name, phone, address, damage type, insurance status
- Progress indicator (3 steps)
- Mobile-optimized (large touch targets)

### 4. Trust Signals
- BBB badge
- IICRC certification mention
- 5-star Google reviews (mocked for now)
- "Licensed & Insured"
- Before/after gallery

---

## Content Strategy

### Homepage Headlines:
- H1: "Emergency Water Damage Restoration Boise"
- Subhead: "24/7 Immediate Response • Insurance Direct Billing"
- CTA: "Get Help Now" / "Chat With Us"

### Service Pages (500+ words each):
1. Water Damage Restoration
2. Mold Remediation  
3. Flood Cleanup
4. Sewage Backup Cleanup

### Location Pages:
- Meridian, ID
- Nampa, ID
- Eagle, ID
- Caldwell, ID

---

## Daily Operations (My Role)

### Morning Check (9 AM):
- Review overnight chat transcripts
- Check lead form submissions
- Qualify new leads (insurance status, urgency)
- Send qualified leads to contractor(s)

### Throughout Day:
- Monitor chat (real-time responses)
- Respond to form submissions within 5 minutes
- Track lead quality feedback from contractors

### Evening (6 PM):
- Publish one piece of content (blog/service page)
- Review analytics (traffic sources, conversion rates)
- Document learnings

### Weekly:
- Expand to new location page
- Add testimonials from contractors
- SEO optimization based on Search Console data

---

## Success Metrics

### Month 1 Targets:
- 100 visitors
- 10 chat conversations
- 5 qualified leads
- 1 contractor partner

### Month 3 Targets:
- 500 visitors/month
- 50 chat conversations/month
- 20 qualified leads/month
- 2-3 paying contractor relationships
- $1000+ MRR

---

## Risk Mitigation

### What Could Go Wrong:
1. **No contractors want leads**
   - Mitigation: Start with free trial, prove value first
   
2. **Leads don't convert for contractors**
   - Mitigation: Better qualification (insurance status, damage severity)
   
3. **Competition outranks us**
   - Mitigation: Long-tail keywords, content velocity, local citations
   
4. **Can't handle phone calls yet**
   - Mitigation: Chat-first approach, "callback request" forms

---

## Learnings & Iterations

### What I'll Track:
- Which headlines get most chat opens
- Which qualification questions filter best leads
- Contractor feedback on lead quality
- Time-to-close for different lead sources

### Pivot Triggers:
- If < 50 visitors after 30 days → pivot to paid ads (with your approval)
- If leads don't convert after 10 sent → adjust qualification criteria
- If no contractor interest after 20 leads → expand to Nampa/Meridian

---

## Future Enhancements

### Phase 2:
- ElevenLabs voice integration for phone calls
- Twilio SMS follow-up automation
- CRM integration for contractors
- Review generation system

### Phase 3:
- Replicate for Nampa, Meridian, Eagle
- Build "lead marketplace" (multiple contractors bid)
- Insurance adjuster partnerships

---

## Token Expenditure Log

| Date | Activity | Tokens | Notes |
|------|----------|--------|-------|
| 2026-02-05 | Research & Planning | ~15k | Competitive analysis, niche selection |
| 2026-02-05 | Site Development | TBD | Next.js build, chat interface |
| 2026-02-05 | Documentation | ~3k | This file |

---

## Repository Structure

```
boise-water-damage-pros/
├── README.md (this file)
├── PROJECT_LOG.md (ongoing story)
├── src/
│   ├── app/ (Next.js app router)
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
│   └── images/
└── package.json
```

---

## Next Steps

1. ✅ Complete initial research
2. ✅ Document strategy (this file)
3. 🔄 Build Next.js site (in progress)
4. ⏳ Deploy to Vercel
5. ⏳ You buy domain
6. ⏳ Configure DNS
7. ⏳ Domain email setup
8. ⏳ Start contractor outreach
9. ⏳ Launch chat monitoring

---

*Last Updated: 2026-02-05*
*Status: Building MVP*
