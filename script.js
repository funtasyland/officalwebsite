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
    image: 'image/party22.jpg',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A heartwarming and interactive kids role-play party experience in Sydney, where each child adopts and cares for their own plush pet.',
      includes: ['Adoption station with certificates and name tags', 'Plush pet for each child to take home', 'Pet grooming and decorating activities', 'Customise accessories and styling', 'Decorate take-home carry bag', 'Beautifully styled activity tables', 'Guided games and interactive activities', 'Birthday cake celebration']
    }
  },
  'g-clay': {
    icon: '🧸', name: 'G-Clay Craft Party', desc: 'A hands-on creative clay sculpting experience',
    image: 'image/party322.jpg',
    details: {
      venue: 'Parisian Room',
      capacity: '30 children',
      description: 'A hands-on creative clay party experience in Gordon, perfect for artistic children.',
      includes: ['Guided sculpting experience with step-by-step instruction', 'Clay tools, materials and decorative elements', 'Aprons for all guests', 'Create and take home personalised artwork', 'Styled table setup', 'Interactive games', 'Food and cake celebration', 'Party bags']
    }
  },
  'candle-art': {
    icon: '🕯️', name: 'Candle Art Party', desc: 'A creative candle-making party designing scented keepsakes',
    image: 'image/party21.jpg',
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
    image: 'image/party33.png',
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
    image: 'image/party20.jpg',
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
    image: 'image/party18.jpg',
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
    desc: '$1,480 for up to 12 kids — Choose 2 Parisian Room activities:',
    themes: [
      allThemes['deluxe-spa'], allThemes['cupcake'], allThemes['gel-cream'],
      allThemes['pet-adoption'], allThemes['g-clay'], allThemes['candle-art'],
      allThemes['mosaic']
    ]
  },
  premium: {
    title: 'Premium Dual-Room Package',
    desc: '$1,880 for up to 12 kids — Choose 1 from each group:',
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

// ---- Theme selection in booking form ----
const parisianThemes = [
  allThemes['deluxe-spa'], allThemes['cupcake'], allThemes['gel-cream'],
  allThemes['pet-adoption'], allThemes['g-clay'], allThemes['candle-art'], allThemes['mosaic']
];
const discoThemes = [
  allThemes['disco'], allThemes['glow-fun'],
  allThemes['tiny-zoo'], allThemes['magical'], allThemes['neon-paint']
];
const allThemesList = [...parisianThemes, ...discoThemes];

let selectedThemes = { groupA: [], groupB: [], flat: [] };

function buildChips(themes, groupKey) {
  return themes.map((t, i) =>
    `<button type="button" class="theme-chip" data-group="${groupKey}" data-index="${i}" onclick="toggleThemeChip(this)">${t.icon} ${t.name}</button>`
  ).join('');
}

function onPackageChange() {
  const pkg = document.getElementById('package').value;
  const container = document.getElementById('themeSelection');
  selectedThemes = { groupA: [], groupB: [], flat: [] };

  if (!pkg) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = '';

  if (pkg === 'standard') {
    container.innerHTML =
      '<div class="theme-select-group">' +
      '<label>Choose 1 Theme</label>' +
      '<div class="theme-chips">' + buildChips(allThemesList, 'flat') + '</div>' +
      '</div>';
  } else if (pkg === 'ultimate') {
    container.innerHTML =
      '<div class="theme-select-group">' +
      '<label>Choose 2 Parisian Room Themes</label>' +
      '<div class="theme-chips">' + buildChips(parisianThemes, 'flat') + '</div>' +
      '</div>';
  } else if (pkg === 'premium') {
    container.innerHTML =
      '<div class="theme-select-group">' +
      '<label>Activity 1 — Parisian Room (choose 1)</label>' +
      '<div class="theme-chips">' + buildChips(parisianThemes, 'groupA') + '</div>' +
      '</div>' +
      '<div class="theme-select-group">' +
      '<label>Activity 2 — Disco Room (choose 1)</label>' +
      '<div class="theme-chips">' + buildChips(discoThemes, 'groupB') + '</div>' +
      '</div>';
  } else if (pkg === 'outside') {
    container.innerHTML =
      '<div class="theme-select-group">' +
      '<p style="color: var(--color-text-light); font-size: 0.92rem;">Please describe your venue and preferences in the Special Requests field below and we\'ll tailor a package for you.</p>' +
      '</div>';
  }
}

function toggleThemeChip(el) {
  const pkg = document.getElementById('package').value;
  const group = el.dataset.group;
  const index = parseInt(el.dataset.index);

  if (el.classList.contains('selected')) {
    el.classList.remove('selected');
    selectedThemes[group] = selectedThemes[group].filter(i => i !== index);
  } else {
    let maxSelect = 1;
    if (pkg === 'ultimate' && group === 'flat') maxSelect = 2;

    if (selectedThemes[group].length >= maxSelect) {
      // Deselect the first selected one
      const firstIdx = selectedThemes[group].shift();
      const chips = el.parentElement.querySelectorAll('.theme-chip[data-group="' + group + '"]');
      chips[firstIdx].classList.remove('selected');
    }
    selectedThemes[group].push(index);
    el.classList.add('selected');
  }

  // Update hidden input
  updateThemeInput();
}

function updateThemeInput() {
  const pkg = document.getElementById('package').value;
  let names = [];

  if (pkg === 'standard') {
    names = selectedThemes.flat.map(i => allThemesList[i].name);
  } else if (pkg === 'ultimate') {
    names = selectedThemes.flat.map(i => parisianThemes[i].name);
  } else if (pkg === 'premium') {
    names = [
      ...selectedThemes.groupA.map(i => parisianThemes[i].name),
      ...selectedThemes.groupB.map(i => discoThemes[i].name)
    ];
  }

  let hidden = document.getElementById('selectedThemes');
  if (!hidden) {
    hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.id = 'selectedThemes';
    hidden.name = 'themes';
    document.querySelector('.booking-form').appendChild(hidden);
  }
  hidden.value = names.join(', ');
}

// Booking form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  // Add package display name to form data
  const data = new FormData(form);
  data.set('package', form.querySelector('#package option:checked').textContent || '');
  if (!data.get('themes')) data.set('themes', 'None selected');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  fetch('/send-email', { method: 'POST', body: new URLSearchParams(data) })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        btn.textContent = 'Thank you! We\'ll be in touch soon.';
        btn.style.background = '#6ab04c';
        btn.style.borderColor = '#6ab04c';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.borderColor = '';
          form.reset();
          document.getElementById('themeSelection').style.display = 'none';
          document.getElementById('themeSelection').innerHTML = '';
          selectedThemes = { groupA: [], groupB: [], flat: [] };
        }, 4000);
      } else {
        btn.textContent = 'Failed to send. Please try again.';
        btn.style.background = '#e74c3c';
        btn.style.borderColor = '#e74c3c';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 3000);
      }
    })
    .catch(() => {
      btn.textContent = 'Failed to send. Please try again.';
      btn.style.background = '#e74c3c';
      btn.style.borderColor = '#e74c3c';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 3000);
    });

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.style.background = '';
    btn.style.borderColor = '';
    form.reset();
    document.getElementById('themeSelection').style.display = 'none';
    document.getElementById('themeSelection').innerHTML = '';
    selectedThemes = { groupA: [], groupB: [], flat: [] };
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

document.querySelectorAll('.about-card, .service-card, .package-card, .testimonial-card, .tip-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ---- Puzzle Gallery Lightbox ----
(function () {
  const pieces = document.querySelectorAll('.puzzle-piece');
  const lightbox = document.getElementById('puzzleLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  if (pieces.length === 0) return;

  // Shuffle pieces randomly on each load
  const gallery = document.querySelector('.puzzle-gallery');
  const shuffled = Array.from(pieces).sort(() => Math.random() - 0.5);
  shuffled.forEach(piece => gallery.appendChild(piece));

  const srcs = Array.from(gallery.querySelectorAll('.puzzle-piece')).map(p => p.querySelector('img').src);
  let current = 0;

  function open(index) {
    current = index;
    lightboxImg.src = srcs[current];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    current = (current + dir + srcs.length) % srcs.length;
    lightboxImg.src = srcs[current];
  }

  pieces.forEach((piece, i) => piece.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Staggered reveal animation
  pieces.forEach((piece, i) => {
    piece.style.opacity = '0';
    piece.style.transform = 'scale(0.85) rotate(' + (Math.random() * 4 - 2) + 'deg)';
    piece.style.transition = 'opacity 0.6s ease ' + (i * 0.08) + 's, transform 0.6s ease ' + (i * 0.08) + 's';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1) rotate(0deg)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  pieces.forEach(piece => observer.observe(piece));
})();

// ---- Feature Top Slider ----
(function () {
  const track = document.querySelector('.feature-track');
  const slides = document.querySelectorAll('.feature-slide');
  const dotsContainer = document.querySelector('.feature-slider-dots');
  if (!track || slides.length === 0) return;

  let current = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('feature-slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.feature-slider-dot');

  function goTo(index) {
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4000);
  }
  resetTimer();

  const slider = document.querySelector('.feature-slider');
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', resetTimer);
})();
