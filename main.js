document.addEventListener('DOMContentLoaded', function() {
    // 课程大纲数据
    const syllabusData = {
        module1: [ // 康复护理基础
            { title: '中西医康复护理概述', lecturer: '黄双英', hours: 1 },
            { title: '常用康复治疗技术', lecturer: '宋彩平', hours: 1 },
            { title: '康复护理评估', lecturer: '何碧云', hours: 1 }
        ],
        module2: [ // 康复护理管理
            { title: '中医康复护理人才培养及专科建设', lecturer: '俞国红', hours: 1 },
            { title: '康复护理科研创新', lecturer: '徐敏', hours: 1 },
            { title: '康复护理质量安全管理', lecturer: '俞慧仙', hours: 1 }
        ],
        module3: [ // 常见病症的康复护理
            { title: '脑卒中中西医康复护理', lecturer: '倪斐琳', hours: 1 },
            { title: '脊髓损伤中西医康复护理', lecturer: '包云春', hours: 1 },
            { title: '失智症的中西医康复护理', lecturer: '徐慧', hours: 1 },
            { title: 'COPD的中西医康复护理', lecturer: '胡祝红', hours: 1 },
            { title: '全膝关节置换术患者中西医康复护理', lecturer: '詹晓雁', hours: 1 },
            { title: '截瘫患者康复护理', lecturer: '黄冬红', hours: 1 },
            { title: '心脏康复五大处方及安全管理', lecturer: '张丽艳', hours: 1 },
            { title: '吞咽障碍的评估及中医康复护理进展', lecturer: '顾月琴', hours: 1 },
            { title: '神经源性膀胱评估及康复护理新进展', lecturer: '王佳珏', hours: 1 },
            { title: '神经源性肠道中西医康复护理', lecturer: '沈宋炎', hours: 1 },
            { title: '老年护理安全问题及风险防范', lecturer: '张福英', hours: 1 },
            { title: '衰弱评估及康复护理', lecturer: '叶会玲', hours: 1 },
            { title: '气管切开患者气道管理', lecturer: '卢强芳', hours: 1 },
            { title: '肠内营养康复护理', lecturer: '王兰芳', hours: 1 },
            { title: '压疮护理新进展', lecturer: '方晓莉', hours: 1 },
            { title: '患者常见心理问题康复护理', lecturer: '高静芳', hours: 1 }
        ],
        module4: [ // 常用康复护理技术
            { title: '康复体位管理：良肢位摆放', lecturer: '顾月琴', hours: 1 },
            { title: '康复体位管理：体位转移技术', lecturer: '潘来英', hours: 1 },
            { title: '呼吸功能康复技术：气道廓清技术', lecturer: '张琳', hours: 1 },
            { title: '日常生活自理能力训练技术', lecturer: '李慧敏', hours: 1 },
            { title: '偏瘫患者功能体位摆放操作技术', lecturer: '孙斐雯', hours: 1 },
            { title: '轴线翻身法操作技术', lecturer: '蔡巧莹', hours: 1 },
            { title: '骨牵引护理操作技术', lecturer: '蔡巧莹', hours: 1 },
            { title: '持续烤灯（鹅颈灯）操作技术', lecturer: '屈秋月', hours: 1 },
            { title: '气压泵治疗仪操作技术', lecturer: '屈秋月', hours: 1 },
            { title: '负压引流冲洗操作技术', lecturer: '屈秋月', hours: 1 },
            { title: '持续被动活动训练仪（CPM）操作技术', lecturer: '周诗瑶', hours: 1 },
            { title: '间隙性压力泵操作技术', lecturer: '周诗瑶', hours: 1 },
            { title: '骨折水疱处理的操作技术', lecturer: '周诗瑶', hours: 1 },
            { title: '断指再植术后侧切口放血湿敷护理技术', lecturer: '屈秋月', hours: 1 },
            { title: '断指术后康复锻炼—屈肌腱', lecturer: '屈秋月', hours: 1 },
            { title: '断指（肢）再植术后康复指导（术后0-7天）', lecturer: '屈秋月', hours: 1 },
            { title: '断指（肢）再植术后康复指导（术后7天以上）', lecturer: '屈秋月', hours: 1 }
        ],
        module5: [ // 中医特色技术操作及临床应用
            { title: '火龙罐概述', lecturer: '贺海霞', hours: 1 },
            { title: '火龙罐综合灸在中风肢体活动障碍中的临床应用', lecturer: '叶会聪', hours: 1 },
            { title: '艾草的临床应用', lecturer: '赵俐黎', hours: 1 },
            { title: '艾灸在腰腿痛患者中的应用', lecturer: '陈晓洁', hours: 1 },
            { title: '雷火灸在产后康复中的应用', lecturer: '王亚楠', hours: 1 },
            { title: '耳穴概论', lecturer: '刘凤选', hours: 1 },
            { title: '耳压疗法', lecturer: '刘凤选', hours: 1 },
            { title: '耳穴压豆在不寐症患者中的应用', lecturer: '汪永坚', hours: 1 },
            { title: '腰腿痛的耳穴应用', lecturer: '刘凤选', hours: 1 },
            { title: '刮痧疗法起源', lecturer: '杨涛', hours: 1 },
            { title: '刮痧疗法操作要领', lecturer: '杨涛', hours: 1 },
            { title: '刮痧在干眼症患者中的应用', lecturer: '唐娅琴', hours: 1 },
            { title: '腕踝针法概述', lecturer: '黄毅', hours: 1 },
            { title: '腕踝针法的刺激/针刺点与选穴', lecturer: '黄毅', hours: 1 },
            { title: '腕踝针法的基本操作', lecturer: '黄毅', hours: 1 },
            { title: '腕踝针在痛症患者中的应用', lecturer: '蔡亚红', hours: 1 },
            { title: '便秘经穴推拿技术的应用', lecturer: '周静', hours: 1 }
        ],
        module6: [ // 康复护理个案分享
            { title: '脑卒中患者中西医康复护理案例', lecturer: '林萍', hours: 1 },
            { title: '髋关节置换术患者中西医康复护理案例', lecturer: '翁仙明', hours: 1 },
            { title: '重症肺炎患者中西医康复护理案例', lecturer: '胡培亚', hours: 1 },
            { title: '心力衰竭患者中西医康复护理案例', lecturer: '周丽亚', hours: 1 },
            { title: '肺癌患者中西医康复护理案例', lecturer: '叶会玲', hours: 1 },
            { title: '小儿颅脑损伤中西医康复护理案例', lecturer: '沈玲明', hours: 1 }
        ]
    };

    // 加载课程内容
    function loadSyllabusContent(moduleId) {
        const content = syllabusData[moduleId];
        const syllabusContent = document.querySelector('.syllabus-content');
        
        let html = '<div class="syllabus-grid">';
        content.forEach((item, index) => {
            html += `
                <div class="syllabus-item">
                    <div class="syllabus-item-number">${index + 1}</div>
                    <div class="syllabus-item-content">
                        <h4>${item.title}</h4>
                        <div class="buju">
                            <p><i class="fas fa-user-md"></i> ${item.lecturer}</p>
                            <p><i class="fas fa-clock"></i> ${item.hours}学时</p>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        syllabusContent.innerHTML = html;
    }

    // 初始加载第一个模块内容
    loadSyllabusContent('module1');

    // 标签切换事件
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前活动状态
            button.classList.add('active');
            // 加载对应内容
            loadSyllabusContent(button.dataset.module);
        });
    });

    // Smooth scrolling for navigation links
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

    // Active navigation highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Course modules animation
    const courseModules = document.querySelectorAll('.course-module');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    courseModules.forEach(module => {
        module.style.opacity = '0';
        module.style.transform = 'translateY(20px)';
        module.style.transition = 'all 0.6s ease-out';
        observer.observe(module);
    });

    // CTA Button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.transform = 'translateY(-3px)';
        });
        
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.transform = 'translateY(0)';
        });
    }

    // 添加滚动动画
    const observerOptions2 = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions2);

    // 观察所有需要动画的元素
    document.querySelectorAll('.advantage-card, .info-item, .syllabus-item').forEach(el => {
        observer2.observe(el);
    });
});
