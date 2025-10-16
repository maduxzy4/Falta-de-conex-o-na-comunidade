// ===== DATA =====
const storiesData = [
    {
        id: 1,
        name: "Maria Silva",
        anonymous: false,
        story: "Depois de me mudar para uma nova cidade, me senti completamente isolada. Não conhecia ninguém e o trabalho remoto só piorou a situação. Até que decidi participar de um grupo de caminhada local. Foi difícil dar o primeiro passo, mas hoje tenho amigos que se tornaram minha família escolhida.",
        category: "Superação",
        likes: 42
    },
    {
        id: 2,
        name: "Anônimo",
        anonymous: true,
        story: "A correria do dia a dia fez com que eu perdesse contato com meus vizinhos. Moramos no mesmo prédio há anos, mas mal nos cumprimentávamos. Decidi começar pequeno: um 'bom dia' sincero no elevador. Hoje organizamos encontros mensais e criamos uma verdadeira comunidade.",
        category: "Iniciativa",
        likes: 38
    },
    {
        id: 3,
        name: "João Santos",
        anonymous: false,
        story: "Trabalhar de casa durante a pandemia me deixou em uma bolha. Percebi que passava dias sem conversas significativas. Comecei a participar de eventos de voluntariado aos fins de semana. Ajudar os outros me ajudou a me reconectar comigo mesmo e com minha comunidade.",
        category: "Voluntariado",
        likes: 55
    }
];

const resourcesData = [
    { title: "Grupos de Caminhada", description: "Encontre grupos de caminhada na sua região e combine exercício com socialização.", category: "grupos", icon: "users" },
    { title: "Clubes de Leitura", description: "Conecte-se com pessoas que compartilham seu amor pela leitura.", category: "grupos", icon: "book" },
    { title: "Voluntariado Local", description: "Ajude sua comunidade e conheça pessoas com valores similares.", category: "atividades", icon: "heart" },
    { title: "Eventos Comunitários", description: "Participe de eventos e festivais organizados na sua área.", category: "eventos", icon: "calendar" },
    { title: "Espaços de Coworking", description: "Para trabalhadores remotos que buscam interação social durante o dia.", category: "grupos", icon: "map" },
    { title: "Desafio Semanal", description: "Receba desafios semanais para dar pequenos passos rumo à reconexão.", category: "desafios", icon: "sparkles" }
];

const blogPosts = [
    {
        title: "O Impacto da Solidão na Saúde Mental",
        description: "Descubra como o isolamento social afeta nosso bem-estar emocional e físico, e por que a conexão humana é essencial para nossa saúde.",
        category: "Saúde Mental",
        readTime: "5 min",
        author: "Dra. Ana Costa, Psicóloga"
    },
    {
        title: "Redes Sociais: Conectando ou Desconectando?",
        description: "Uma análise sobre como as plataformas digitais podem criar uma ilusão de conexão enquanto nos distanciam das relações autênticas.",
        category: "Tecnologia",
        readTime: "7 min",
        author: "Prof. Carlos Mendes, Sociólogo"
    },
    {
        title: "A Arte da Empatia: Ouvir para Conectar",
        description: "Como desenvolver habilidades de escuta ativa e empatia para criar conexões mais profundas e significativas.",
        category: "Comunicação",
        readTime: "6 min",
        author: "Laura Rodrigues, Coach"
    },
    {
        title: "Voluntariado: Transformando Vidas através da Conexão",
        description: "Histórias inspiradoras de como ajudar os outros pode ser o caminho para encontrar propósito e comunidade.",
        category: "Ação Social",
        readTime: "8 min",
        author: "Instituto Conecta"
    },
    {
        title: "Criando Espaços de Pertencimento",
        description: "Dicas práticas para organizar encontros e criar ambientes onde as pessoas se sintam seguras para se abrir e conectar.",
        category: "Comunidade",
        readTime: "5 min",
        author: "Mariana Silva, Facilitadora"
    },
    {
        title: "A Ciência da Conexão Humana",
        description: "O que a neurociência revela sobre nossa necessidade inata de pertencer e os benefícios das relações sociais positivas.",
        category: "Ciência",
        readTime: "10 min",
        author: "Dr. Roberto Santos, Neurocientista"
    }
];

const quizQuestions = [
    {
        question: "Com que frequência você tem conversas significativas (além de assuntos superficiais)?",
        options: [
            { value: "daily", label: "Diariamente", points: 4 },
            { value: "weekly", label: "Semanalmente", points: 3 },
            { value: "monthly", label: "Mensalmente", points: 2 },
            { value: "rarely", label: "Raramente", points: 1 }
        ]
    },
    {
        question: "Quantas pessoas você pode contar em momentos difíceis?",
        options: [
            { value: "many", label: "5 ou mais pessoas", points: 4 },
            { value: "some", label: "3-4 pessoas", points: 3 },
            { value: "few", label: "1-2 pessoas", points: 2 },
            { value: "none", label: "Nenhuma", points: 1 }
        ]
    },
    {
        question: "Como você se sente em relação à sua comunidade local?",
        options: [
            { value: "connected", label: "Muito conectado", points: 4 },
            { value: "somewhat", label: "Moderadamente conectado", points: 3 },
            { value: "little", label: "Pouco conectado", points: 2 },
            { value: "isolated", label: "Isolado", points: 1 }
        ]
    },
    {
        question: "Com que frequência você participa de atividades em grupo?",
        options: [
            { value: "often", label: "Mais de uma vez por semana", points: 4 },
            { value: "sometimes", label: "Uma vez por semana", points: 3 },
            { value: "occasional", label: "Ocasionalmente", points: 2 },
            { value: "never", label: "Nunca", points: 1 }
        ]
    },
    {
        question: "Você se sente ouvido e compreendido pelas pessoas ao seu redor?",
        options: [
            { value: "always", label: "Sempre", points: 4 },
            { value: "often", label: "Frequentemente", points: 3 },
            { value: "sometimes", label: "Às vezes", points: 2 },
            { value: "rarely", label: "Raramente", points: 1 }
        ]
    }
];

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initMouseTracking();
    loadStories();
    loadResources();
    loadBlogPosts();
    initQuiz();
});

// ===== HERO ANIMATIONS =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

function initMouseTracking() {
    const heroSection = document.querySelector('.hero-section');
    const mouseWave = document.getElementById('mouseWave');
    
    heroSection.addEventListener('mousemove', function(e) {
        const rect = heroSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        mouseWave.style.left = x + '%';
        mouseWave.style.top = y + '%';
        mouseWave.style.display = 'block';
    });
    
    heroSection.addEventListener('mouseleave', function() {
        mouseWave.style.display = 'none';
    });
}

// ===== SCROLL =====
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ===== STORIES =====
function loadStories() {
    const container = document.getElementById('storiesGrid');
    container.innerHTML = storiesData.map(story => `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${story.name}</h3>
                <span class="badge badge-secondary">${story.category}</span>
            </div>
            <div class="card-content">
                <p style="font-size: 0.875rem; margin-bottom: 1rem; line-height: 1.6;">${story.story}</p>
                <div style="display: flex; align-items: center; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--color-sky-300);">
                    <button class="btn btn-secondary" onclick="likeStory(${story.id})" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
                        <svg class="icon icon-small" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span id="likes-${story.id}">${story.likes}</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function likeStory(id) {
    const story = storiesData.find(s => s.id === id);
    if (story) {
        story.likes++;
        document.getElementById(`likes-${id}`).textContent = story.likes;
    }
}

function openStoryDialog() {
    document.getElementById('storyModal').classList.add('active');
}

function closeStoryDialog() {
    document.getElementById('storyModal').classList.remove('active');
}

function toggleAnonymous() {
    const checkbox = document.getElementById('storyAnonymous');
    const nameInput = document.getElementById('storyName');
    nameInput.disabled = checkbox.checked;
    if (checkbox.checked) {
        nameInput.value = '';
    }
}

function submitStory(e) {
    e.preventDefault();
    const name = document.getElementById('storyName').value;
    const anonymous = document.getElementById('storyAnonymous').checked;
    const story = document.getElementById('storyText').value;
    
    const newStory = {
        id: storiesData.length + 1,
        name: anonymous ? "Anônimo" : name,
        anonymous: anonymous,
        story: story,
        category: "Experiência",
        likes: 0
    };
    
    storiesData.unshift(newStory);
    loadStories();
    closeStoryDialog();
    
    // Reset form
    document.getElementById('storyForm').reset();
    
    alert('Obrigado por compartilhar sua história!');
}

// ===== RESOURCES =====
function loadResources() {
    const container = document.getElementById('resourcesGrid');
    renderResourcesByCategory('todos', container);
}

function renderResourcesByCategory(category, container) {
    const filtered = category === 'todos' ? resourcesData : resourcesData.filter(r => r.category === category);
    
    container.innerHTML = filtered.map(resource => `
        <div class="card">
            <div class="card-header">
                <div class="icon-circle">
                    ${getIconSVG(resource.icon)}
                </div>
                <h3 class="card-title">${resource.title}</h3>
                <p class="card-description">${resource.description}</p>
            </div>
            <div class="card-content">
                <button class="btn btn-outline full-width">Ver mais</button>
            </div>
        </div>
    `).join('');
}

function getIconSVG(iconName) {
    const icons = {
        users: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
        book: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
        heart: '<svg class="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
        calendar: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
        map: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
        sparkles: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>'
    };
    return icons[iconName] || icons.heart;
}

function switchTab(tabName) {
    // Update tab triggers
    document.querySelectorAll('.tab-trigger').forEach(trigger => {
        trigger.classList.remove('active');
        if (trigger.dataset.tab === tabName) {
            trigger.classList.add('active');
        }
    });
    
    // Render resources
    const container = document.getElementById('resourcesGrid');
    renderResourcesByCategory(tabName, container);
}

// ===== BLOG =====
function loadBlogPosts() {
    const container = document.getElementById('blogGrid');
    container.innerHTML = blogPosts.map((post, index) => `
        <div class="card">
            <div class="card-header">
                <div class="blog-meta">
                    <span class="badge badge-secondary">${post.category}</span>
                    <div class="read-time">
                        <svg class="icon icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        ${post.readTime}
                    </div>
                </div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.description}</p>
            </div>
            <div class="card-content">
                <p style="font-size: 0.875rem; color: var(--color-muted); margin-bottom: 1rem;">${post.author}</p>
                <button class="btn btn-outline full-width">
                    Ler artigo
                    <svg class="icon icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// ===== QUIZ =====
let currentQuestion = 0;
let answers = [];

function initQuiz() {
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quizContainer');
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    
    container.innerHTML = `
        <div class="quiz-card">
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <p class="progress-text">Pergunta ${currentQuestion + 1} de ${quizQuestions.length}</p>
            </div>
            
            <h3 class="quiz-question">${question.question}</h3>
            
            <div class="quiz-options" id="quizOptions">
                ${question.options.map((option, index) => `
                    <label class="quiz-option">
                        <input type="radio" name="answer" value="${option.value}" data-points="${option.points}">
                        <span>${option.label}</span>
                    </label>
                `).join('')}
            </div>
            
            <button class="btn btn-primary full-width" onclick="nextQuestion()" id="nextButton" disabled>
                ${currentQuestion < quizQuestions.length - 1 ? 'Próxima pergunta' : 'Ver resultados'}
            </button>
        </div>
    `;
    
    // Enable button when option is selected
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', function() {
            document.getElementById('nextButton').disabled = false;
        });
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return;
    
    answers.push({
        value: selected.value,
        points: parseInt(selected.dataset.points)
    });
    
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        renderQuizQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0);
    const result = getSuggestions(totalScore);
    
    const container = document.getElementById('quizContainer');
    container.innerHTML = `
        <div class="quiz-card quiz-result">
            <div class="result-icon">
                <svg class="icon icon-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="result-level">${result.level}</h3>
            <p class="result-message">${result.message}</p>
            <p style="margin-bottom: 2rem; color: var(--color-muted);">Sua pontuação: ${totalScore} de ${quizQuestions.length * 4}</p>
            
            <div class="suggestions-grid">
                <h4 style="margin-bottom: 1rem;">Sugestões personalizadas para você:</h4>
                ${result.suggestions.map(suggestion => `
                    <div class="suggestion-card">
                        <h5 class="suggestion-title">${suggestion.title}</h5>
                        <p style="font-size: 0.875rem; color: var(--color-muted);">${suggestion.description}</p>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn btn-primary full-width" onclick="resetQuiz()">Refazer avaliação</button>
        </div>
    `;
}

function getSuggestions(score) {
    if (score >= 17) {
        return {
            level: "Excelente",
            message: "Você mantém conexões fortes! Continue cultivando essas relações.",
            suggestions: [
                { title: "Seja um multiplicador", description: "Ajude outras pessoas a se conectarem também" },
                { title: "Aprofunde vínculos", description: "Invista em tornar suas conexões ainda mais significativas" },
                { title: "Lidere iniciativas", description: "Organize eventos para fortalecer sua comunidade" }
            ]
        };
    } else if (score >= 12) {
        return {
            level: "Bom",
            message: "Você tem algumas conexões, mas há espaço para crescer.",
            suggestions: [
                { title: "Participe de grupos", description: "Encontre comunidades que compartilhem seus interesses" },
                { title: "Aprofunde relações", description: "Transforme conhecidos em amigos verdadeiros" },
                { title: "Seja mais regular", description: "Crie hábitos de interação social consistentes" }
            ]
        };
    } else {
        return {
            level: "Precisa de atenção",
            message: "Suas conexões sociais precisam de mais cuidado. Comece com pequenos passos!",
            suggestions: [
                { title: "Comece pequeno", description: "Cumprimente seus vizinhos, inicie conversas simples" },
                { title: "Aceite os desafios", description: "Participe dos desafios semanais de reconexão" },
                { title: "Busque ajuda", description: "Considere conversar com um profissional sobre suas dificuldades" }
            ]
        };
    }
}

function resetQuiz() {
    currentQuestion = 0;
    answers = [];
    renderQuizQuestion();
}

// ===== CLOSE MODAL ON OUTSIDE CLICK =====
window.onclick = function(event) {
    const modal = document.getElementById('storyModal');
    if (event.target === modal) {
        closeStoryDialog();
    }
}
