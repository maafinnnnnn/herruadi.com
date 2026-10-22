import dribbbleThumb from '../../assets/hire/dribbble-thumb.png';
import type { HireContent } from './types';

// Indonesian copy for /hire. Entries tagged DRAFT were written by Claude
// (not supplied in the brief) and are listed for review in the hand-off.
// Everything else follows the brief word for word.

export const hireId: HireContent = {
  lang: 'id',
  ogLocale: 'id_ID',
  roleLabel: 'Product Designer (UI/UX)',

  meta: {
    title: 'Rekrut Product Designer (UI/UX) Dedicated, Tanpa Outsourcing · Herru Adi',
    description:
      'Product designer (UI/UX) 9+ tahun pengalaman, bisa direkrut langsung per bulan. Tanpa margin outsourcing, tanpa beban BPJS dan THR. Remote, hybrid, onsite.',
  },
  og: {
    title: ['Rekrut designer.', 'Tanpa ribet.'],
    subtitle: 'Product Designer (UI/UX) · 9+ tahun · Tanpa margin outsourcing',
    domain: 'herruadi.com/hire',
  },

  contact: {
    email: 'hello@herruadi.com',
    whatsappNumber: '6281319862989',
    location: 'Bandung',
  },

  wa: {
    package:
      'Halo Herru, saya tertarik dengan paket *{name}* (mulai dari {price}) dari herruadi.com/hire. Saya dari [nama perusahaan/tim], kebutuhan kami: ',
    freelance: 'Halo Herru, saya tertarik dengan *Proyek lepas* dari herruadi.com/hire. Proyeknya tentang: ',
    custom:
      'Halo Herru, saya mau diskusi *paket custom* dari herruadi.com/hire. Kebutuhan kami (jam per minggu, durasi, remote/onsite): ',
    general: 'Halo Herru, saya mau diskusi soal dedicated designer dari herruadi.com/hire.',
  },

  ui: {
    newTab: '(buka di tab baru)',
    popular: 'Paling populer',
    from: 'mulai dari',
    perMonth: '/bulan',
    includes: 'Termasuk',
    choosePackage: 'Pilih paket ini',
    whatsapp: 'Chat di WhatsApp',
    compareShow: 'Lihat perbandingan lengkap',
    compareHide: 'Sembunyikan perbandingan',
    stickyWhatsapp: 'Chat WhatsApp',
    email: 'Email',
  },

  hero: {
    eyebrow: 'Product Designer (UI/UX) Dedicated · Bandung',
    word: 'Designer',
    headline: 'Pengalaman 9+ tahun dengan tarif mid-level. Tanpa margin outsourcing, tanpa beban BPJS dan THR.',
    sub: 'Saya product designer (UI/UX) dengan 9+ tahun pengalaman yang bisa kamu rekrut langsung per bulan, tanpa outsourcing.',
    primaryCta: 'Chat di WhatsApp',
    secondaryCta: 'Lihat portfolio',
    proof: '9+ tahun · SaaS, fintech, enterprise',
    modelNote: 'Kontrak dedicated per bulan, bukan lowongan karyawan full-time.', // DRAFT wording of a brief requirement
    keywords: [
      'Product Design',
      'Design System',
      'SaaS',
      'Fintech',
      'Enterprise',
      'AI Prototyping',
      'UX Research',
    ],
    // Locked. `fit` is the width of the longer line in em; the page
    // re-measures it once the font loads, so it only matters as a fallback.
    display: { lines: ['REKRUT DESIGNER.', 'TANPA RIBET.'], fit: 6.8 },
  },

  // DRAFT: section title, lead, and the 3 item bodies
  audience: {
    eyebrow: 'Untuk siapa',
    title: 'Untuk tim yang butuh desainer berpengalaman, tanpa outsourcing',
    items: [
      {
        title: 'Butuh desainer cepat',
        body: 'Startup atau tim yang mau mulai desain dalam 1–2 minggu, tanpa proses rekrut yang panjang.',
      },
      {
        title: 'Desainer tim resign atau cuti panjang',
        body: 'Tim produk yang pekerjaan desainnya harus tetap jalan walau desainer di tim berhenti atau sedang cuti.',
      },
      {
        title: 'Membangun atau redesign produk digital',
        body: 'UMKM atau tim kecil yang mau membangun atau merombak aplikasi, dashboard, atau website.',
      },
    ],
    photoAlt: 'Herru Adi, product designer (UI/UX) berbasis di Bandung',
    captionName: 'Herru Adi',
    captionRole: 'Product Designer (UI/UX) · Bandung',
  },

  pricing: {
    eyebrow: 'Paket',
    // DRAFT: title and lead
    title: 'Pilih ritme kerja yang cocok',
    packages: [
      {
        id: 'remote-part-time',
        name: 'Remote Part-time',
        priceLabel: 'Rp 5 jt',
        priceFrom: 5_000_000,
        currency: 'IDR',
        hours: '±20 jam/minggu',
        // DRAFT: forWhom and includes for all four packages
        forWhom: 'Untuk tim yang butuh desainer di satu produk atau beberapa fitur, tanpa kebutuhan harian penuh.',
        includes: [
          '±20 jam kerja per minggu',
          'Fokus ke satu produk atau sekumpulan fitur',
          'Jadwal kerja disepakati setiap minggu',
        ],
      },
      {
        id: 'remote-full-time',
        name: 'Remote Full-time',
        priceLabel: 'Rp 10 jt',
        priceFrom: 10_000_000,
        currency: 'IDR',
        hours: '±40 jam/minggu',
        forWhom: 'Untuk tim produk yang butuh desainer full-time dan bekerja dekat dengan tim.',
        includes: [
          '±40 jam kerja per minggu',
          'Ikut ritme tim: standup, sprint planning, dan review',
          'Jam kerja WIB, overlap bisa disesuaikan',
        ],
        popular: true,
      },
      {
        id: 'hybrid',
        name: 'Hybrid',
        priceLabel: 'Rp 12 jt',
        priceFrom: 12_000_000,
        currency: 'IDR',
        hours: '±2–3 hari onsite per minggu',
        forWhom: 'Untuk tim yang butuh kerja bareng tatap muka beberapa hari dalam seminggu.',
        includes: [
          '±2–3 hari onsite per minggu',
          'Workshop dan diskusi tatap muka saat onsite',
          'Tersedia di Bandung maupun luar kota',
        ],
      },
      {
        id: 'onsite',
        name: 'Onsite',
        priceLabel: 'Rp 14 jt',
        priceFrom: 14_000_000,
        currency: 'IDR',
        hours: 'Full onsite',
        forWhom: 'Untuk tim yang ingin desainer hadir penuh di kantor.',
        includes: [
          'Full onsite, mengikuti jam kerja tim',
          'Tersedia di Bandung maupun luar kota',
          'Biaya perjalanan dan akomodasi luar Bandung didiskusikan',
        ],
      },
    ],
    freelance: {
      title: 'Proyek lepas',
      body: 'Harga per proyek, setelah diskusi scope. Contoh: redesign aplikasi atau dashboard, design system, landing page.',
      cta: 'Diskusikan proyek',
    },
    custom: {
      title: 'Paket custom',
      body: 'Kebutuhanmu beda? Susun paket sendiri: jam per minggu, durasi, remote atau onsite.',
      cta: 'Diskusikan paket custom',
    },
    commonTitle: 'Berlaku di semua paket',
    common: [
      'Komunikasi langsung dengan saya, tanpa perantara',
      'File dikerjakan di workspace Figma milik tim',
      'Update progres harian, atau mengikuti ritme tim',
      'Tanpa minimal kontrak, berhenti dengan pemberitahuan 2 minggu',
      'Ditagih di akhir bulan, jatuh tempo 7 hari',
      'Jam aktif mengikuti WIB, respons di jam kerja',
      'File dan hasil kerja menjadi milik klien setelah pembayaran periode tersebut lunas',
    ],
    notes: [
      'Hybrid dan onsite tersedia di Bandung maupun luar kota. Untuk luar Bandung, tarif disesuaikan tidak jauh dari tarif di atas, dengan biaya perjalanan/akomodasi didiskusikan.',
    ],
  },

  // DRAFT: all rows and the "common to all packages" list
  compare: {
    title: 'Perbandingan 4 paket bulanan',
    rows: [
      {
        label: 'Harga',
        values: ['Mulai dari Rp 5 jt/bulan', 'Mulai dari Rp 10 jt/bulan', 'Mulai dari Rp 12 jt/bulan', 'Mulai dari Rp 14 jt/bulan'],
      },
      {
        label: 'Waktu kerja',
        values: ['±20 jam/minggu', '±40 jam/minggu', '±2–3 hari onsite per minggu', 'Full onsite'],
      },
      {
        label: 'Lokasi kerja',
        values: ['Remote', 'Remote', 'Hybrid, Bandung atau luar kota', 'Onsite, Bandung atau luar kota'],
      },
      {
        label: 'Cocok untuk',
        values: [
          'Satu produk atau beberapa fitur',
          'Desainer full-time untuk tim produk',
          'Kerja bareng tatap muka beberapa hari seminggu',
          'Desainer hadir penuh di kantor',
        ],
      },
      {
        label: 'Biaya perjalanan',
        values: ['Tidak ada', 'Tidak ada', 'Luar Bandung: didiskusikan', 'Luar Bandung: didiskusikan'],
      },
    ],
  },

  versus: {
    eyebrow: 'Outsourcing vs langsung',
    // DRAFT: title and lead
    title: 'Lewat outsourcing atau langsung dengan saya',
    outsourcingHeading: 'Lewat outsourcing',
    directHeading: 'Langsung dengan saya',
    rows: [
      {
        label: 'Biaya',
        outsourcing: 'Gaji kandidat + margin vendor outsourcing',
        direct: 'Satu tarif bulanan, tanpa perantara',
      },
      {
        label: 'BPJS, THR',
        outsourcing: 'Diurus vendor outsourcing (masuk ke harga)',
        direct: 'Tidak ada di sisi klien',
      },
      {
        label: 'Pengalaman',
        outsourcing: 'Tergantung kandidat yang tersedia',
        direct: '9+ tahun, portfolio bisa dilihat sejak awal',
      },
      {
        label: 'Komunikasi',
        outsourcing: 'Lewat vendor outsourcing untuk urusan kontrak',
        direct: 'Langsung dengan desainer',
      },
      {
        label: 'Mulai kerja',
        outsourcing: 'Setelah proses seleksi vendor outsourcing',
        direct: 'Bisa mulai dalam 1–2 minggu',
      },
      {
        label: 'Minimal kontrak',
        outsourcing: 'Umumnya ada',
        direct: 'Tidak ada, bisa berhenti dengan pemberitahuan 2 minggu',
      },
      {
        label: 'Pembayaran',
        outsourcing: 'Mengikuti ketentuan vendor outsourcing',
        direct: 'Di akhir bulan, seperti jadwal gajian',
      },
      {
        label: 'Pengganti kalau berhalangan',
        outsourcing: 'Ada jaminan pengganti',
        direct:
          'Tidak ada (satu orang). Semua file ada di workspace Figma milik tim dan terdokumentasi, jadi pekerjaan tidak terputus.',
      },
      {
        label: 'Vendor resmi (PT/CV) untuk procurement',
        outsourcing: 'Ada',
        direct: 'Belum, invoice pribadi dengan kontrak tertulis',
      },
    ],
    cta: 'Chat di WhatsApp',
  },

  proof: {
    eyebrow: 'Pengalaman',
    // DRAFT: title and lead
    title: 'Pengalaman yang bisa kamu cek sejak awal',
    lead: 'Saya sudah mengerjakan produk SaaS, fintech, enterprise, dan EdTech untuk klien di Indonesia, Brunei, Singapura, UK, US, dan Arab Saudi.',
    stats: [
      { value: '9+', label: 'tahun pengalaman' },
      { value: '30%', label: 'waktu workflow operator turun (AYCE)' },
    ],
    portfolioTitle: 'Portfolio',
    portfolio: [
      { kind: 'work', id: 'ayce', descriptor: 'SaaS F&B · Brunei', ctaId: 'portfolio-ayce' },
      { kind: 'work', id: 'vantagelab', descriptor: 'Dashboard crypto berbasis AI · UK', ctaId: 'portfolio-vantagelab' },
      { kind: 'work', id: 'hoteely', descriptor: 'Hotel property management system · Glovory', ctaId: 'portfolio-hoteely' },
      {
        kind: 'external',
        title: 'Dribbble',
        descriptor: 'Lihat shot lainnya di Dribbble',
        href: 'https://dribbble.com/herruadi',
        ctaId: 'portfolio-dribbble',
        thumb: dribbbleThumb,
        thumbAlt: 'Shot Dribbble bertuliskan "Your data is complex. Your UI doesn\'t have to be."',
      },
    ],
    experienceTitle: 'Daftar pengalaman',
    experience: [
      {
        name: 'AYCE',
        meta: 'F&B SaaS, Brunei · Senior UI/UX Designer',
        body: 'Memegang produk dari ideation sampai pilot. Waktu workflow operator turun 30%. Memperkenalkan MCP di handoff design-to-dev.',
      },
      {
        name: 'Innoark',
        meta: 'Singapura · ±3 tahun',
        body: 'Enterprise SaaS, design system, dan web app untuk monitoring dan maintenance proses manufaktur.',
      },
      {
        name: 'VantageLab',
        meta: 'UK',
        body: 'Dashboard crypto intelligence berbasis AI yang padat data.',
      },
      {
        name: 'HornDesk',
        meta: 'US · property management system',
        body: 'Design system dibangun sendiri dari nol.',
      },
      {
        name: 'PT Sarana Pembayaran Syariah',
        meta: 'Product Design Lead',
        body: 'Fintech dan KYC, dengan BRD dan FSD.',
      },
      {
        name: 'Glovory / Taleb',
        meta: 'Arab Saudi',
        body: 'Aplikasi EdTech untuk sekolah.',
      },
      {
        name: 'Purwadhika dan training korporat',
        meta: 'Pengajar UI/UX',
        body: 'Mengajar UI/UX di Purwadhika, dan training korporat untuk BRI, Yamaha, dan Massindo.',
      },
      {
        name: 'Prototyping dengan AI tools',
        meta: 'Claude Code, Claude Design ke Figma',
        body: 'Prototyping cepat dengan AI tools untuk memvalidasi ide sebelum masuk ke pengembangan.', // DRAFT tail clause
      },
    ],
    cta: 'Chat di WhatsApp',
  },

  // DRAFT: lead and the one-line body of each step
  process: {
    eyebrow: 'Cara kerja',
    title: 'Bisa mulai dalam 1–2 minggu',
    steps: [
      { title: 'Diskusi scope', body: 'Kita bahas kebutuhan, target, dan paket yang paling cocok.' },
      { title: 'Kesepakatan dan kontrak bulanan', body: 'Scope, jam kerja, dan jadwal ditulis di kontrak. Tanpa minimal kontrak.' },
      { title: 'Onboarding', body: 'Akses ke Figma, tools, dan dokumen tim. Kita sepakati ritme kerja dan cara update.' },
      { title: 'Kerja dengan update rutin', body: 'Progres dibagikan setiap hari atau mengikuti ritme tim, jadi tim selalu tahu posisi pekerjaan.' },
      { title: 'Invoice di akhir bulan', body: 'Ditagih seperti jadwal gajian, jatuh tempo 7 hari.' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering ditanyakan',
    items: [
      {
        question: 'Apa bedanya dengan rekrut lewat outsourcing?',
        answer:
          'Kamu bayar satu tarif langsung ke saya, tanpa margin vendor outsourcing dan tanpa beban BPJS/THR. Komunikasi juga langsung dengan saya.',
      },
      {
        question: 'Apakah ada minimal kontrak?',
        answer:
          'Tidak ada. Kontrak bulanan dan bisa berhenti kapan saja dengan pemberitahuan 2 minggu. Cocok untuk tim yang mau coba dulu 1–2 bulan.',
      },
      {
        question: 'Bagaimana sistem pembayaran dan invoice?',
        answer:
          'Invoice dikirim di akhir bulan, seperti jadwal gajian, dengan jatuh tempo 7 hari. Pembayaran via transfer bank. Kalau berhenti di tengah bulan, tagihan terakhir dihitung sesuai hari kerja yang berjalan.',
      },
      {
        question: 'Kalau kebutuhan saya tidak cocok dengan paket yang ada?',
        answer:
          'Kita bisa susun paket custom: jam per minggu, durasi, dan remote atau onsite disesuaikan dengan kebutuhan tim kamu.',
      },
      {
        question: 'Kalau Herru berhalangan atau sakit, bagaimana?',
        answer:
          'Saya satu orang, jadi tidak ada pengganti. Semua file ada di workspace Figma milik tim dan terdokumentasi, dan hari yang terlewat bisa diganti atau tidak ditagih sesuai kesepakatan.',
      },
      {
        question: 'Bagaimana jam kerjanya?',
        answer: 'Mengikuti jam kerja WIB, bisa disesuaikan untuk overlap dengan tim di zona waktu lain.',
      },
      {
        question: 'Siapa pemilik file dan hasil desain?',
        answer: 'Semua file dan hasil kerja menjadi milik klien setelah pembayaran untuk periode tersebut lunas.',
      },
      {
        question: 'Bisa onsite di luar Bandung?',
        answer:
          'Bisa. Tarif disesuaikan tidak jauh dari tarif di halaman ini, dengan biaya perjalanan dan akomodasi didiskusikan.',
      },
      {
        question: 'Kapan bisa mulai?',
        answer: 'Biasanya dalam 1–2 minggu setelah kesepakatan.',
      },
      {
        question: 'Tools apa yang dipakai?',
        answer:
          'Figma sebagai tools utama, plus AI tools untuk prototyping cepat. Bisa menyesuaikan tools tim (Jira, Notion, Slack, dan lainnya).',
      },
    ],
    cardTitle: 'Masih ada pertanyaan?',
    cardBody: 'Chat langsung, biasanya dibalas di hari yang sama di jam kerja.',
    cardCta: 'Chat di WhatsApp',
  },

  closing: {
    title: 'Siap mulai?',
    lead: 'Ceritakan kebutuhan tim kamu. Biasanya dibalas di hari yang sama di jam kerja.',
    primaryCta: 'Chat di WhatsApp',
    secondaryCta: 'Kirim email',
  },
};
