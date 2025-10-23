// Sources data
const sources = [
    {
        id: 1,
        title: "كيفية تحسين إدارة الموارد البشرية في المنشآت الصناعية",
        description: "مقالة شاملة حول أفضل الممارسات في إدارة الموارد البشرية وتحسين الأداء في المنشآت الصناعية.",
        url: "https://aiiem.org/ar/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%AA%D8%AD%D8%B3%D9%8A%D9%86-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7/"
    },
    {
        id: 2,
        title: "أثر الممارسات الخضراء لإدارة الموارد البشرية في دعم الأداء المستدام",
        description: "دراسة تطبيقية على شركات قطاع الأعمال الصناعي العام بوسط الدلتا، تبحث في تأثير الممارسات الخضراء على الأداء المستدام.",
        url: "https://acjalexu.journals.ekb.eg/article_291102.html"
    },
    {
        id: 3,
        title: "استراتيجية تفعيل الممارسة المستدامة للموارد البشرية في المنظمة الصناعية",
        description: "بحث عن الاستراتيجيات اللازمة لتفعيل الممارسات المستدامة للموارد البشرية في المنظمات الصناعية.",
        url: "https://asjp.cerist.dz/en/article/184930"
    },
    {
        id: 4,
        title: "تقليل دوران العمالة: استراتيجيات فعالة",
        description: "مقالة من Oracle حول كيفية تقليل معدل دوران العمالة وتحسين الاحتفاظ بالموظفين.",
        url: "https://www.oracle.com/ae-ar/human-capital-management/reduce-employee-turnover/"
    },
    {
        id: 5,
        title: "العوامل المؤثرة على دوران العمالة وكيفية التغلب عليها",
        description: "تحليل شامل للعوامل التي تؤثر على دوران العمالة والحلول العملية للتعامل معها.",
        url: "https://www.tawzef.com/ar/blogs/factors-affecting-employee-turnover-and-how-to-overcome-them"
    },
    {
        id: 6,
        title: "دور الموارد البشرية في تحقيق الأداء المستدام",
        description: "ورقة بحثية حول دور ممارسات الموارد البشرية في تحقيق الأداء المستدام في المنظمات.",
        url: "https://jes.journals.ekb.eg/article_19581_6de5e3bfe847b24935dc10789dd8dbd4.pdf"
    },
    {
        id: 7,
        title: "الإدارة الاستراتيجية للموارد البشرية في الصناعة التحويلية",
        description: "دراسة حول التوازن بين الأتمتة وتطوير القوى العاملة في الصناعة التحويلية.",
        url: "https://www.researchgate.net/publication/375597706_dwr_mmarsat_almward_albshryt_fy_astdamt_alada_drast_mydanyt_lara_ynt_mn_alamlyn_fy_almnzmat_altjaryt_alraqyt_The_Role_of_Human_Resources_Practices_in_Sustaining_Performance_A_Field_Study_of_The_Opinio"
    },
    {
        id: 8,
        title: "نظريات الأداء والإنتاجية",
        description: "مقالة تغطي النظريات المختلفة المتعلقة بأداء الموظفين والإنتاجية في المنظمات.",
        url: "https://i-tcis.com/performance-theories/?srsltid=AfmBOopDRhv_D1-O9U0xtgfUsdU8LOyOafK2LCmBXkME3rIwZGa__p5"
    },
    {
        id: 9,
        title: "توظيف الموارد البشرية وأثره على دوران العمالة",
        description: "بحث أكاديمي يدرس تأثير عمليات التوظيف على معدلات دوران العمالة في القطاع الصناعي.",
        url: "http://dspace.univ-ouargla.dz/jspui/bitstream/123456789/34035/1/mkadm-majoul.pdf"
    },
    {
        id: 10,
        title: "تقييم أداء الموظفين والحوافز",
        description: "مقالة متخصصة في أنظمة تقييم الأداء والحوافز وتأثيرها على رضا الموظفين.",
        url: "https://jbet.journals.ekb.eg/article_341797_7aa0842bd455867a32cd3176f4236b9b.pdf"
    },
    {
        id: 11,
        title: "الوظائف الخضراء وتغيير المناخ",
        description: "تقرير من منظمة العمل الدولية حول الوظائف الخضراء والمهن المستدامة.",
        url: "https://www.ilo.org/ar/%D8%A7%D9%84%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7%D8%A1-%D9%88%D8%AA%D8%BA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE"
    },
    {
        id: 12,
        title: "تقييم أداء الموظفين والتطوير المهني",
        description: "مقالة تناقش أهمية تقييم الأداء والتطوير المستمر للموظفين في المنظمات.",
        url: "https://mojarib.com/%D8%AA%D9%82%D9%8A%D9%8A%D9%85-%D8%A3%D8%AF%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D9%88%D8%B8%D9%81%D9%8A%D9%86/"
    },
    {
        id: 13,
        title: "توظيف الموارد البشرية وتأثيره على الأداء",
        description: "دراسة شاملة حول العلاقة بين استراتيجيات التوظيف وأداء المنظمة.",
        url: "https://homs-univ.edu.sy/rags/%D8%AA%D9%88%D8%B8%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D9%88%D8%A3%D8%AB%D8%B1%D9%87-%D8%B9%D9%84%D9%89-%D8%AF%D9%88%D8%B1%D8%A7%D9%86"
    },
    {
        id: 14,
        title: "المهن الخضراء والمعادلة السحرية للمستقبل",
        description: "مقالة حول المهن الخضراء والمهارات المطلوبة للعمل في الصناعات المستدامة.",
        url: "https://aygvn.org/%D8%A7%D9%84%D9%85%D9%87%D9%86-%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%84%D8%A9-%D8%A7%D9%84%D8%B3%D8%AD%D8%B1%D9%8A%D8%A9-%D9%84%D9%85%D8%B3%D8%AA%D9%82/"
    },
    {
        id: 15,
        title: "الموارد البشرية والذكاء الاصطناعي",
        description: "مقالة عن تأثير الذكاء الاصطناعي على إدارة الموارد البشرية والمستقبل الوظيفي.",
        url: "https://arabexp.com/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9%D8%8C-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A/"
    }
];

// Function to render sources
function renderSources() {
    const sourcesList = document.getElementById('sourcesList');
    sourcesList.innerHTML = '';

    sources.forEach((source, index) => {
        const sourceCard = document.createElement('div');
        sourceCard.className = 'source-card';
        sourceCard.innerHTML = `
            <div class="source-card-number">${source.id}</div>
            <h3 class="source-card-title">${source.title}</h3>
            <p class="source-card-description">${source.description}</p>
            <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-card-link">
                <span>اقرأ المزيد</span>
                <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        sourcesList.appendChild(sourceCard);
    });
}

// Navigation active link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSources();
    updateActiveNavLink();
    
    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.source-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});
