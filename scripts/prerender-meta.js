/**
 * Post-build script: generates per-route HTML files with correct meta tags.
 *
 * The SPA's index.html has generic meta tags. Search engine crawlers and social
 * media bots that don't execute JavaScript will only see those generic tags.
 * This script copies the built index.html for each route and injects the correct
 * <title>, <meta description>, and Open Graph tags so crawlers see the right
 * metadata even without JS execution.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const baseUrl = 'https://financial-literacy-residents.vercel.app'

const routes = [
  {
    path: '/accounts',
    title: 'Retirement Accounts for Medical Residents — Roth IRA, 403(b), HSA Limits 2026',
    description: 'Complete guide to retirement accounts for medical residents: Roth IRA, 403(b), 457(b), HSA contribution limits for 2026, priority order, and why Roth wins during residency.',
  },
  {
    path: '/investing',
    title: 'Investing for Medical Residents — Why Index Funds Beat Stock Picking',
    description: 'Why 94% of professional stock pickers lose to index funds, the behavior gap that costs investors thousands, and exactly what to buy in your retirement accounts as a medical resident.',
  },
  {
    path: '/fees',
    title: 'How 1% Advisory Fees Cost Physicians $1.34 Million — Fee-Only Alternatives',
    description: 'A 1% financial advisor fee costs a physician $1.34 million over a 35-year career. Learn the difference between fee-only and fee-based advisors, and find fiduciary directories.',
  },
  {
    path: '/taxes',
    title: 'Tax Strategy for Medical Residents — Brackets, Deductions & Roth Contributions 2026',
    description: '2026 federal tax brackets, standard deduction, effective tax rates for residents, student loan interest deduction, and why Roth contributions matter during training.',
  },
  {
    path: '/loans',
    title: 'Student Loan Repayment for Doctors — PSLF vs Aggressive Payoff Calculator',
    description: 'Compare PSLF forgiveness vs aggressive repayment for medical residents. Interactive calculator, IDR plan comparison (PAYE, IBR, RAP), and the July 2026 PSLF deadline explained.',
  },
  {
    path: '/insurance',
    title: 'Disability Insurance for Residents — Own-Occupation Coverage & the Big 5 Carriers',
    description: 'Why medical residents need own-occupation disability insurance, the five riders to insist on, the Big 5 carriers, and why term life beats whole life for physicians.',
  },
  {
    path: '/credit-cards',
    title: 'Best Credit Cards for Medical Residents — Chase Ultimate Rewards Strategy',
    description: 'How medical residents can earn free travel with credit card points. The Chase trifecta strategy, how points transfers work, and a concrete example booking a trip to Berlin.',
  },
  {
    path: '/calculator',
    title: 'Financial Independence Calculator for Physicians — 25x Rule & 4% Withdrawal Rate',
    description: 'Interactive FI calculator for medical residents and physicians. Enter your income, expenses, and savings to see your FI number, savings rate, and years to financial independence.',
  },
  {
    path: '/resources',
    title: 'Best Financial Literacy Resources for Doctors — White Coat Investor & More',
    description: 'Curated list of the best financial literacy resources for medical residents: White Coat Investor, Bogleheads, ChooseFI, Student Loan Planner, and essential books on personal finance.',
  },
]

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8')

for (const route of routes) {
  const url = `${baseUrl}${route.path}`
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${route.description}"`
    )

  // Inject OG and Twitter tags before </head>
  const ogTags = [
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${route.title}" />`,
    `<meta name="twitter:description" content="${route.description}" />`,
    `<link rel="canonical" href="${url}" />`,
  ].join('\n    ')

  html = html.replace('</head>', `    ${ogTags}\n  </head>`)

  const outDir = join(distDir, route.path.slice(1))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
}

console.log(`Pre-rendered meta tags for ${routes.length} routes`)
