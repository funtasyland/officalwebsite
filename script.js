// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    mobileToggle.classList.remove('active');
  });
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Shared theme definitions
const allThemes = {
  'deluxe-spa': {
    icon: '💆', name: 'Deluxe Spa Pamper Party', desc: 'A luxurious kids spa party with elegance, relaxation and glamour',
    image: 'image/party(8).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A luxurious kids spa birthday party in Gordon, Sydney, designed for children who love elegance, relaxation and a touch of glamour.',
      includes: ['Private use of our beautifully styled Parisian room', 'Soft waffle bathrobes and hairbands for each guest', 'Warm bubble foot spa experience', 'Mini facial with child-safe organic clay mask', 'Glitter Bar with gems and holographic embellishments', 'Light makeup with shimmering eyeshadow and glitter eyeliner', 'Guided activities, music and interactive games', 'Styled table setup for food and cake celebration', 'Birthday cake ceremony', 'Premium party bags']
    }
  },
  'cupcake': {
    icon: '🧁', name: 'Cupcake Decorating Party', desc: 'Hands-on cupcake decorating with sweet treats to take home',
    image: 'image/party (3).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A fun and creative kids cupcake decorating party in Sydney\'s North Shore, perfect for hands-on learning and sweet treats.',
      includes: ['Chef hats and aprons for all guests', 'Cupcake decorating experience with coloured icing', 'Wide selection of sprinkles, lollies and edible decorations', 'Creative freedom to design personalised cupcakes', 'Take-home patisserie box', 'Beautifully styled decorating tables', 'Interactive games and activities', 'Birthday cake celebration', 'Party bags']
    }
  },
  'gel-cream': {
    icon: '🧴', name: 'Gel Cream Decoration Party', desc: 'A trending DIY craft party making personalised accessories',
    image: 'image/party (1).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A trending and creative DIY craft birthday party in Gordon, loved by children who enjoy making personalised accessories.',
      includes: ['Step-by-step guided gel cream workshop', 'Create unique accessories and decorations', 'Wide selection of beads, pearls, glitter and toppings', 'Aprons and gloves provided for all guests', 'Styled craft table setup', 'Interactive games and guided activities', 'Food and cake celebration setup', 'Birthday cake ceremony', 'Party bags']
    }
  },
  'pet-adoption': {
    icon: '🐻', name: 'Pet Adoption Party', desc: 'A heartwarming role-play party where kids adopt their own plush pet',
    image: 'image/party (4).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A heartwarming and interactive kids role-play party experience in Sydney, where each child adopts and cares for their own plush pet.',
      includes: ['Adoption station with certificates and name tags', 'Plush pet for each child to take home', 'Pet grooming and decorating activities', 'Customise accessories and styling', 'Decorate take-home carry bag', 'Beautifully styled activity tables', 'Guided games and interactive activities', 'Birthday cake celebration']
    }
  },
  'g-clay': {
    icon: '🧸', name: 'G-Clay Craft Party', desc: 'A hands-on creative clay sculpting experience',
    image: 'image/party (4).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A hands-on creative clay party experience in Gordon, perfect for artistic children.',
      includes: ['Guided sculpting experience with step-by-step instruction', 'Clay tools, materials and decorative elements', 'Aprons for all guests', 'Create and take home personalised artwork', 'Styled table setup', 'Interactive games', 'Food and cake celebration', 'Party bags']
    }
  },
  'candle-art': {
    icon: '🕯️', name: 'Candle Art Party', desc: 'A creative candle-making party designing scented keepsakes',
    image: 'image/IMG_1727.JPG',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A creative and relaxing kids candle-making party in Sydney, where children design their own scented keepsake.',
      includes: ['Candle-making materials and tools', 'Colour mixing and scent selection', 'Step-by-step guided instruction', 'Decorative packaging for take-home candles', 'Styled activity setup', 'Games and interactive activities', 'Food and cake celebration', 'Party bags']
    }
  },
  'mosaic': {
    icon: '🧩', name: 'Mosaic Art Party', desc: 'A calm and creative mosaic craft experience',
    image: 'image/party (5).webp',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A calm and creative mosaic art birthday party in Gordon, ideal for children who enjoy detailed craft activities.',
      includes: ['Mosaic design experience (vase or coaster)', 'Step-by-step guided instruction', 'Materials and tools provided', 'Take-home finished artwork', 'Styled table setup', 'Games and guided activities', 'Food and cake celebration']
    }
  },
  'disco': {
    icon: '🪩', name: 'Disco Dance Party', desc: 'A high-energy disco party with music, dancing and interactive fun',
    image: 'image/party (7).webp',
    details: {
      venue: 'Disco Room',
      capacity: '25 children',
      description: 'A high-energy kids disco party in Gordon, perfect for children who love music, dancing and interactive fun.',
      includes: ['LED interactive dance floor', 'Music, dance competitions and group games', 'Karaoke and performance activities', 'Disco accessories and props', 'Dance battles and team challenges', 'Fun prizes and interactive entertainment', 'Birthday cake celebration', 'Party bags']
    }
  },
  'glow-fun': {
    icon: '🌈', name: 'Glow Party (LED & Neon)', desc: 'A vibrant glow-in-the-dark party with neon lights and music',
    image: 'image/party (7).webp',
    details: {
      venue: 'Disco Room',
      capacity: '25 children',
      description: 'A vibrant glow-in-the-dark kids party in Sydney North Shore, combining neon lights, music and immersive fun.',
      includes: ['Glow face and body paint', 'Neon party styling and decorations', 'LED glow accessories and light-up props', 'Interactive LED dance floor', 'Music, games and high-energy activities', 'Fun prizes and group interaction', 'Birthday cake ceremony', 'Party bags']
    }
  },
  'tiny-zoo': {
    icon: '🐍', name: 'Tiny Zoo Party', desc: 'An exciting and educational wildlife party experience',
    image: 'image/party(9).webp',
    details: {
      venue: 'Disco Room',
      capacity: '25 children',
      description: 'An exciting and educational wildlife party experience in Sydney North Shore, perfect for curious and adventurous children. Animals may include: insects, frogs, turtles, lizards, python, crocodile and more.',
      includes: ['2 licensed wildlife keepers', '1-hour interactive animal presentation', 'Hands-on animal encounters', 'Photo opportunities with selected animals', 'Birthday child participation experience', 'Q&A session with experts', 'Birthday cake ceremony', 'Party bags']
    }
  },
  'magical': {
    icon: '🎩', name: 'Magical Party', desc: 'A captivating magic party with live performance and hands-on learning',
    image: 'image/party (6).webp',
    details: {
      venue: 'Disco Room',
      capacity: '25 children',
      description: 'A captivating kids magic party in Gordon, combining live performance, interactive fun and hands-on learning.',
      includes: ['Professional magician performance', 'Interactive magic show with audience participation', 'Customised magic workshop (age-appropriate)', 'LED lighting and themed music for atmosphere', 'Fun games and guided activities', 'Styled table setup and food service', 'Birthday cake ceremony', 'Magic-themed party bags with props']
    }
  },
  'neon-paint': {
    icon: '🎨', name: 'Neon Paint Party', desc: 'A vibrant glow-in-the-dark art party with music and neon creativity',
    image: 'image/party (7).webp',
    details: {
      venue: 'Disco Room',
      capacity: '25 children',
      description: 'A vibrant and creative kids neon paint party in Gordon, combining glow-in-the-dark art, music and an immersive party atmosphere.',
      includes: ['Glow-in-the-dark painting activity on canvas or creative surfaces', 'Professional art instructor guiding the experience step-by-step', 'A wide range of neon paints, brushes and decorating tools', 'UV lighting to enhance glowing visual effects', 'Stylish table setup for painting and celebration', 'Birthday cake ceremony', 'Party bags']
    }
  }
};

// Theme modal data
const packageThemes = {
  standard: {
    title: 'Signature Package Themes',
    desc: '$1,150 for up to 12 kids — Choose 1 theme:',
    themes: [
      allThemes['deluxe-spa'], allThemes['cupcake'], allThemes['gel-cream'],
      allThemes['pet-adoption'], allThemes['g-clay'], allThemes['candle-art'],
      allThemes['mosaic'], allThemes['disco'], allThemes['glow-fun'],
      allThemes['tiny-zoo'], allThemes['magical'], allThemes['neon-paint']
    ]
  },
  ultimate: {
    title: 'Parisian Duo Package Themes',
    desc: '$1,450 for up to 12 kids — Choose 2 Parisian Room activities:',
    themes: [
      allThemes['deluxe-spa'], allThemes['cupcake'], allThemes['gel-cream'],
      allThemes['pet-adoption'], allThemes['g-clay'], allThemes['candle-art'],
      allThemes['mosaic']
    ]
  },
  premium: {
    title: 'Premium Dual-Room Package',
    desc: '$1,850 for up to 12 kids — Choose 1 from each group:',
    groupA: {
      label: 'Activity 1 — Parisian Room',
      themes: [
        allThemes['deluxe-spa'], allThemes['cupcake'], allThemes['gel-cream'],
        allThemes['pet-adoption'], allThemes['g-clay'], allThemes['candle-art'], allThemes['mosaic'],
      ]
    },
    groupB: {
      label: 'Activity 2 — Disco Room',
      themes: [
        allThemes['disco'], allThemes['glow-fun'],
        allThemes['tiny-zoo'], allThemes['magical'], allThemes['neon-paint']
      ]
    }
  }
};

let currentPackageType = null;

function renderThemeCards(themes, packageType, groupKey) {
  return themes.map((t, i) => {
    const dataAttr = groupKey ? `data-group="${groupKey}" data-index="${i}"` : '';
    return `
    <div class="theme-card" onclick="showThemeDetail('${packageType}', ${i}, '${groupKey || ''}')" ${dataAttr}>
      <div class="theme-icon">${t.icon}</div>
      <h4>${t.name}</h4>
      <p>${t.desc}</p>
    </div>
  `;
  }).join('');
}

function openThemeModal(packageType) {
  currentPackageType = packageType;
  const data = packageThemes[packageType];
  const modal = document.getElementById('themeModal');
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;

  const grid = document.getElementById('themesGrid');

  if (data.groupA && data.groupB) {
    grid.className = 'themes-grouped';
    grid.innerHTML = `
      <div class="theme-group">
        <h3 class="theme-group-label">${data.groupA.label}</h3>
        <div class="themes-grid">${renderThemeCards(data.groupA.themes, packageType, 'groupA')}</div>
      </div>
      <div class="theme-group">
        <h3 class="theme-group-label">${data.groupB.label}</h3>
        <div class="themes-grid">${renderThemeCards(data.groupB.themes, packageType, 'groupB')}</div>
      </div>
    `;
  } else {
    grid.className = 'themes-grid';
    grid.innerHTML = renderThemeCards(data.themes, packageType, '');
  }

  document.getElementById('themesListView').style.display = '';
  document.getElementById('themeDetailView').style.display = 'none';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showThemeDetail(packageType, index, groupKey) {
  const data = packageThemes[packageType];
  let theme;
  if (groupKey && data[groupKey]) {
    theme = data[groupKey].themes[index];
  } else {
    theme = data.themes[index];
  }
  const d = theme.details;

  document.getElementById('detailIcon').textContent = theme.icon;
  document.getElementById('detailTitle').textContent = theme.name;
  document.getElementById('detailContent').innerHTML = `
    <div class="detail-image">
      <img src="${theme.image}" alt="${theme.name}">
    </div>
    <p class="detail-desc">${d.description}</p>
    <div class="detail-info-grid">
      <div class="detail-info-item">
        <span class="detail-label">Venue</span>
        <span class="detail-value">${d.venue}</span>
      </div>
      <div class="detail-info-item">
        <span class="detail-label">Capacity</span>
        <span class="detail-value">${d.capacity}</span>
      </div>
    </div>
    <h3 class="detail-includes-title">What's Included</h3>
    <ul class="detail-includes">
      ${d.includes.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;

  document.getElementById('themesListView').style.display = 'none';
  document.getElementById('themeDetailView').style.display = '';
}

function showThemesList() {
  document.getElementById('themesListView').style.display = '';
  document.getElementById('themeDetailView').style.display = 'none';
}

function closeThemeModal() {
  document.getElementById('themeModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('themeModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeThemeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeThemeModal();
});

// Booking form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // Show confirmation
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Thank you! We\'ll be in touch soon.';
  btn.disabled = true;
  btn.style.background = '#6ab04c';
  btn.style.borderColor = '#6ab04c';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.style.background = '';
    btn.style.borderColor = '';
    form.reset();
  }, 4000);
}

// Simple scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.about-card, .service-card, .package-card, .testimonial-card, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
