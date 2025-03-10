// 標籤分類規則
const CATEGORY_RULES = {
    AI: {
        domains: [
            'chat.openai.com',
            'openai.com',
            'deepseek.com',
            'claude.ai',
            'anthropic.com',
            'leonardo.ai',
            'x.ai',
            'grok.x.ai',
            'twitter.com/grok',
            'bard.google.com',
            'huggingface.co',
            'stability.ai',
            'midjourney.com',
            'replicate.com'
        ],
        keywords: [
            'ai',
            'artificial intelligence',
            'chatbot',
            'gpt',
            'chatgpt',
            'grok',
            'llm',
            'machine learning',
            'deep learning',
            'stable diffusion',
            'dall-e',
            'midjourney',
            'openai',
            'grok ai',
            'chat gpt'
        ],
        nlpPatterns: [
            'ai model',
            'ai generator',
            'ai assistant',
            'language model',
            'image generator',
            'text to image',
            'chatgpt',
            'gpt-4',
            'stable diffusion',
            'ai chat',
            'ai tool',
            'chat gpt',
            'grok bot',
            'grok ai assistant'
        ]
    },
    SOCIAL: {
        domains: [
            'twitter.com',
            'x.com',
            'facebook.com',
            'instagram.com',
            'linkedin.com',
            'reddit.com',
            'pinterest.com',
            'tiktok.com',
            'weibo.com',
            'telegram.org',
            'discord.com',
            'whatsapp.com',
            'messenger.com'
        ],
        keywords: [
            'social',
            'post',
            'share',
            'follow',
            'friend',
            'comment',
            'like',
            'tweet',
            'story',
            'feed',
            'profile',
            '社交',
            '分享',
            '貼文',
            '追蹤',
            '朋友',
            '評論'
        ],
        nlpPatterns: [
            'social media',
            'news feed',
            'timeline',
            'social network',
            'direct message',
            'social platform',
            '社交媒體',
            '動態消息',
            '即時通訊'
        ]
    },
    TOOLS: {
        domains: [
            'calculator.net',
            'wolframalpha.com',
            'translate.google.com',
            'calendar.google.com',
            'drive.google.com',
            'wetransfer.com',
            'speedtest.net',
            'time.is',
            'weather.com',
            'maps.google.com',
            'canva.com',
            'figma.com',
            'photopea.com',
            'draw.io'
        ],
        keywords: [
            'tool',
            'convert',
            'calculator',
            'translator',
            'weather',
            'map',
            'design',
            'edit',
            'utility',
            'generator',
            '工具',
            '轉換',
            '計算機',
            '翻譯',
            '天氣',
            '地圖',
            '設計',
            '編輯'
        ],
        nlpPatterns: [
            'online tool',
            'web tool',
            'converter',
            'calculator',
            'generator',
            'utility',
            '線上工具',
            '網頁工具',
            '實用工具'
        ]
    },
    NEWS: {
        domains: [
            'news.google.com',
            'bbc.com',
            'cnn.com',
            'reuters.com',
            'nytimes.com',
            'theguardian.com',
            'bloomberg.com',
            'forbes.com',
            'techcrunch.com',
            'engadget.com',
            'udn.com',
            'chinatimes.com',
            'ltn.com.tw'
        ],
        keywords: [
            'news',
            'breaking',
            'headlines',
            'report',
            'press',
            'media',
            'journalist',
            '新聞',
            '頭條',
            '報導',
            '媒體',
            '即時',
            '焦點'
        ],
        nlpPatterns: [
            'breaking news',
            'latest news',
            'top stories',
            'news update',
            'daily news',
            '即時新聞',
            '最新消息',
            '新聞報導'
        ]
    },
    DOCS: {
        domains: [
            'notion.so',
            'evernote.com',
            'onenote.com',
            'docs.google.com',
            'sheets.google.com',
            'slides.google.com',
            'dropbox.com',
            'box.com',
            'onedrive.live.com',
            'airtable.com',
            'bear.app',
            'craft.do'
        ],
        keywords: [
            'note',
            'document',
            'spreadsheet',
            'presentation',
            'file',
            'storage',
            'cloud',
            'sync',
            '筆記',
            '文件',
            '試算表',
            '簡報',
            '雲端',
            '同步'
        ],
        nlpPatterns: [
            'cloud storage',
            'document editor',
            'note taking',
            'file sharing',
            'collaboration',
            '雲端儲存',
            '文件編輯',
            '筆記工具'
        ]
    },
    LEARNING: {
        domains: [
            'coursera.org',
            'udemy.com',
            'edx.org',
            'w3schools.com',
            'developer.mozilla.org',
            'github.com',
            'stackoverflow.com',
            'youtube.com/.*tutorial',
            'youtube.com/.*course',
            'youtube.com/.*learn',
            'youtube.com/.*教學',
            'youtube.com/.*課程'
        ],
        keywords: [
            'tutorial',
            'course',
            'learn',
            'learning',
            'guide',
            'documentation',
            'education',
            'study',
            'training',
            'lesson',
            'programming',
            'development',
            'coding',
            '教學',
            '課程',
            '學習',
            '指南',
            '教程',
            '入門',
            '新手',
            '實戰',
            '程式',
            '開發',
            '編程',
            '程式設計',
            '軟體開發',
            '計算機',
            '電腦'
        ],
        nlpPatterns: [
            'how to',
            'tutorial',
            'guide',
            'basics',
            'introduction',
            'getting started',
            'step by step',
            'complete course',
            'full course',
            'for beginners',
            'crash course',
            '如何使用',
            '快速上手',
            '入門教學',
            '完整教程',
            '實戰教學',
            '從零開始',
            '基礎教程',
            '進階教學',
            '詳細講解',
            '完整課程'
        ]
    },
    WORK: {
        domains: [
            'docs.google.com',
            'github.com',
            'gitlab.com',
            'trello.com',
            'slack.com',
            'notion.so',
            'atlassian.com'
        ],
        keywords: [
            'docs',
            'work',
            'project',
            'meeting',
            'email',
            'task',
            'report'
        ],
        nlpPatterns: [
            'meeting',
            'project',
            'report',
            'document',
            'presentation'
        ]
    },
    ENTERTAINMENT: {
        domains: [
            'youtube.com',
            'netflix.com',
            'twitch.tv',
            'spotify.com',
            'disney.com'
        ],
        keywords: [
            'video',
            'music',
            'game',
            'play',
            'fun',
            'entertainment'
        ],
        nlpPatterns: [
            'gameplay',
            'music video',
            'entertainment',
            'funny',
            'game'
        ]
    },
    SHOPPING: {
        domains: [
            'amazon.com',
            'ebay.com',
            'shopee',
            'rakuten',
            'walmart.com'
        ],
        keywords: [
            'shop',
            'cart',
            'buy',
            'price',
            'deal',
            'sale'
        ],
        nlpPatterns: [
            'shopping',
            'deal',
            'discount',
            'sale',
            'price'
        ]
    }
};

// 標籤數據存儲
let tabsData = {
    ai: [],
    social: [],
    tools: [],
    news: [],
    docs: [],
    learning: [],
    work: [],
    entertainment: [],
    shopping: [],
    other: []
};

// 添加语言切换变量和函数
let isEnglish = true;

// 设置事件监听器
function setupEventListeners() {
    // 搜索输入
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // 折叠按钮
    document.querySelectorAll('.collapse-btn').forEach(btn => {
        btn.addEventListener('click', handleCollapse);
    });

    // 语言选择
    const languageSelect = document.getElementById('languageSelect');
    // 从本地存储获取上次选择的语言
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageSelect.value = savedLanguage;
    isEnglish = savedLanguage === 'en';
    
    languageSelect.addEventListener('change', (event) => {
        isEnglish = event.target.value === 'en';
        // 保存语言选择到本地存储
        localStorage.setItem('preferredLanguage', event.target.value);
        updateUI();
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
    await loadTabs();
    setupEventListeners();
    updateUI();
});

// 載入所有標籤
async function loadTabs() {
    const tabs = await browser.tabs.query({});
    categorizeTabs(tabs);
}

// 分類標籤
function categorizeTabs(tabs) {
    tabsData = {
        ai: [],
        social: [],
        tools: [],
        news: [],
        docs: [],
        learning: [],
        work: [],
        entertainment: [],
        shopping: [],
        other: []
    };

    tabs.forEach(tab => {
        const category = determineCategory(tab);
        tabsData[category].push(tab);
    });
}

// 決定標籤類別
function determineCategory(tab) {
    let domain = '';
    let url = '';
    let pathname = '';
    
    try {
        // 處理特殊情況：about:、chrome:、edge: 等協議
        if (tab.url.startsWith('about:') || 
            tab.url.startsWith('chrome:') || 
            tab.url.startsWith('edge:') ||
            tab.url.startsWith('browser:')) {
            return 'other';
        }
        
        // 嘗試解析 URL
        url = new URL(tab.url);
        domain = url.hostname.toLowerCase();
        pathname = decodeURIComponent(url.pathname).toLowerCase();
        const fullUrl = url.toString().toLowerCase();
        
        // AI 工具的特殊 URL 匹配
        if (domain.includes('chat.openai.com') || 
            domain.includes('chatgpt.com') ||
            domain.includes('claude.ai') ||
            domain.includes('bard.google.com') ||
            domain.includes('x.com/i/grok') ||
            domain.includes('grok.x.ai') ||
            domain.includes('deepseek.com') ||
            domain.includes('anthropic.com') ||
            domain.includes('huggingface.co') ||
            domain.includes('stability.ai') ||
            domain.includes('midjourney.com') ||
            domain.includes('leonardo.ai')) {
            return 'ai';
        }
        
        // 特殊處理 Google 搜索頁面
        if (domain.includes('google.com') || domain.includes('google.com.tw')) {
            if (url.pathname === '/search' || url.pathname === '/') {
                return 'other';
            }
        }
        
        // 特殊處理 YouTube 的內容
        if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
            // 解码 URL 中的中文字符
            const decodedUrl = decodeURIComponent(fullUrl);
            const decodedTitle = decodeURIComponent(tab.title || '').toLowerCase();
            
            // 检查学习相关关键词
            const learningKeywords = [
                // 英文关键词
                'tutorial', 'course', 'learn', 'learning', 'guide', 'how to',
                'education', 'study', 'training', 'lesson', 'programming',
                'development', 'coding', 'basics', 'introduction',
                // 中文关键词
                '教學', '課程', '學習', '指南', '教程', '入門', '新手',
                '實戰', '程式', '開發', '編程', '教育', '基礎', '進階',
                '完整課程', '從零開始', '詳解', '講解'
            ];
            
            // 如果标题或 URL 包含学习关键词，归类为学习
            if (learningKeywords.some(keyword => 
                decodedUrl.includes(keyword) || decodedTitle.includes(keyword))) {
                return 'learning';
            }
            
            // 如果没有学习关键词，默认归类为娱乐
            return 'entertainment';
        }
        
        // 检查域名匹配
        for (const [category, rules] of Object.entries(CATEGORY_RULES)) {
            // 域名精确匹配
            if (rules.domains.some(d => {
                if (d.includes('*')) {
                    const pattern = new RegExp(d.replace(/\*/g, '.*'));
                    return pattern.test(domain);
                }
                return domain.includes(d);
            })) {
                return category.toLowerCase();
            }
        }
        
        // 如果域名没有匹配，继续进行标题分析
        const title = decodeURIComponent(tab.title || '').toLowerCase();
        const decodedPathname = decodeURIComponent(pathname);
        
        // 计算每个类别的分数
        const scores = {};
        for (const [category, rules] of Object.entries(CATEGORY_RULES)) {
            let score = 0;
            
            // 检查关键词匹配（标题和路径）
            for (const keyword of rules.keywords) {
                if (title.includes(keyword.toLowerCase())) score += 0.3;
                if (decodedPathname.includes(keyword.toLowerCase())) score += 0.2;
            }
            
            // 检查 NLP 模式匹配
            for (const pattern of rules.nlpPatterns) {
                if (title.includes(pattern.toLowerCase())) score += 0.3;
                if (decodedPathname.includes(pattern.toLowerCase())) score += 0.2;
            }
            
            // 特殊处理学习类别
            if (category === 'LEARNING') {
                score *= 1.2; // 增加学习类别的权重
            }
            
            scores[category] = score;
        }
        
        // 找出分数最高的类别
        const bestCategory = Object.entries(scores)
            .reduce((best, [category, score]) => 
                score > best.score ? {category, score} : best,
                {category: 'other', score: 0}
            );
        
        return bestCategory.score > 0.3 ? bestCategory.category.toLowerCase() : 'other';
        
    } catch (error) {
        console.log('Category determination error:', error);
        return 'other';
    }
}

// 計算類別分數
function calculateCategoryScore(domain, title, titleWords, titlePhrases, rules) {
    let score = 0;
    
    try {
        // 域名匹配
        if (domain && rules.domains.some(d => {
            if (d.includes('*')) {
                // 處理帶有通配符的域名
                const pattern = new RegExp(d.replace(/\*/g, '.*'));
                return pattern.test(domain);
            }
            return domain.includes(d);
        })) {
            score += 0.4;
        }
        
        // 關鍵字匹配
        const keywordMatches = rules.keywords.filter(k => 
            title.includes(k.toLowerCase())
        ).length;
        score += keywordMatches * 0.2;
        
        // NLP模式匹配
        const nlpMatches = rules.nlpPatterns.filter(pattern => 
            titlePhrases.some(phrase => 
                phrase.toLowerCase().includes(pattern.toLowerCase())
            )
        ).length;
        score += nlpMatches * 0.3;
        
        // 連續關鍵字加分
        titlePhrases.forEach(phrase => {
            const matchCount = rules.keywords.filter(k => 
                phrase.toLowerCase().includes(k.toLowerCase())
            ).length;
            if (matchCount > 1) {
                score += 0.1 * matchCount;
            }
        });
    } catch (error) {
        console.log('Score calculation error:', error);
        return 0;
    }
    
    return score;
}

// 尋找標題中的短語
function findPhrases(title) {
    const phrases = [];
    const words = title.split(/[\s\-_]+/);
    
    // 生成2-4個詞的短語
    for (let i = 0; i < words.length; i++) {
        for (let len = 2; len <= 4 && i + len <= words.length; len++) {
            phrases.push(words.slice(i, i + len).join(' '));
        }
    }
    
    return phrases;
}

// 更新UI
function updateUI() {
    updateStats();
    updateGroups();
    updateSuggestions();
    updateLanguageTexts();
}

// 更新統計信息
async function updateStats() {
    const tabs = await browser.tabs.query({});
    const totalTabs = tabs.length;

    // 获取所有标签页的详细信息
    const tabDetails = await Promise.all(tabs.map(tab => browser.tabs.get(tab.id)));
    
    // 计算活跃标签页数量（非休眠状态的标签）
    const activeTabs = tabDetails.filter(tab => !tab.discarded).length;
    
    document.getElementById('totalTabs').textContent = isEnglish ? 
        `Total Tabs: ${totalTabs} (${activeTabs} active)` : 
        `總標籤數: ${totalTabs} (${activeTabs} 個活躍)`;
    
    // 估算内存使用（每个活跃标签约50MB，休眠标签约5MB）
    const estimatedMemory = (activeTabs * 50) + ((totalTabs - activeTabs) * 5);
    document.getElementById('memoryUsage').textContent = isEnglish ?
        `Memory Usage: ~${estimatedMemory}MB` :
        `記憶體使用: 約 ${estimatedMemory}MB`;
}

// 更新分組
function updateGroups() {
    Object.keys(tabsData).forEach(group => {
        const groupElement = document.getElementById(`${group}Group`);
        const content = groupElement.querySelector('.group-content');
        const count = groupElement.querySelector('.tab-count');

        content.innerHTML = '';
        count.textContent = tabsData[group].length;

        tabsData[group].forEach(tab => {
            content.appendChild(createTabElement(tab));
        });
    });
}

// 創建標籤元素
function createTabElement(tab) {
    const div = document.createElement('div');
    div.className = 'tab-item';
    div.innerHTML = `
        <img class="tab-favicon" src="${tab.favIconUrl || 'icons/default-favicon.png'}">
        <span class="tab-title">${tab.title}</span>
        <button class="tab-close" data-tab-id="${tab.id}">✕</button>
    `;

    div.querySelector('.tab-close').addEventListener('click', () => closeTab(tab.id));
    return div;
}

// 關閉標籤
async function closeTab(tabId) {
    await browser.tabs.remove(tabId);
    await loadTabs();
    updateUI();
}

// 處理搜索
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const tabs = Object.values(tabsData).flat();
    
    tabs.forEach(tab => {
        const element = document.querySelector(`[data-tab-id="${tab.id}"]`).parentElement;
        const matches = tab.title.toLowerCase().includes(searchTerm) ||
                       tab.url.toLowerCase().includes(searchTerm);
        element.style.display = matches ? '' : 'none';
    });
}

// 處理折疊
function handleCollapse(event) {
    const header = event.target.parentElement;
    const content = header.nextElementSibling;
    const isCollapsed = content.style.display === 'none';
    
    content.style.display = isCollapsed ? '' : 'none';
    event.target.textContent = isCollapsed ? '▼' : '▶';
}

// 查找重复标签
function findDuplicateTabs(tabs) {
    const urlMap = new Map();
    const duplicates = [];
    
    tabs.forEach(tab => {
        const url = tab.url;
        if (!urlMap.has(url)) {
            urlMap.set(url, [tab]);
        } else {
            urlMap.get(url).push(tab);
            duplicates.push(tab);
        }
    });
    
    return { duplicates, urlMap };
}

// 查找长时间未访问的标签
async function findInactiveTabs(tabs) {
    const inactiveTabs = [];
    
    for (const tab of tabs) {
        try {
            const tabInfo = await browser.tabs.get(tab.id);
            // 如果标签页已被休眠（discarded），认为是不活跃的
            if (tabInfo.discarded) {
                inactiveTabs.push(tab);
            }
        } catch (error) {
            console.log('Error checking tab status:', error);
        }
    }
    
    return inactiveTabs;
}

// 更新建议
async function updateSuggestions() {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    const tabs = await browser.tabs.query({});
    
    // 检查重复标签
    const { duplicates, urlMap } = findDuplicateTabs(tabs);
    
    // 检查长时间未访问的标签
    const inactiveTabs = await findInactiveTabs(tabs);
    
    // 添加建议
    if (duplicates.length > 0) {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        
        // 创建建议内容容器
        const textDiv = document.createElement('div');
        textDiv.className = 'suggestion-text';
        textDiv.textContent = isEnglish ?
            `Found ${duplicates.length} duplicate tabs that could be merged` :
            `發現 ${duplicates.length} 個重複的標籤頁可以合併`;
        
        // 创建标签列表容器
        const listDiv = document.createElement('div');
        listDiv.className = 'suggestion-list';
        
        // 添加重复标签到列表
        for (const [url, tabs] of urlMap) {
            if (tabs.length > 1) {
                const tabDiv = document.createElement('div');
                tabDiv.className = 'suggestion-tab-item';
                
                const tabInfo = document.createElement('span');
                tabInfo.className = 'suggestion-tab-info';
                tabInfo.textContent = `${tabs[0].title} (${tabs.length}x)`;
                
                const closeBtn = document.createElement('button');
                closeBtn.className = 'suggestion-tab-close';
                closeBtn.textContent = '✕';
                closeBtn.onclick = async (e) => {
                    e.stopPropagation();
                    const tabsToClose = tabs.slice(1).map(tab => tab.id);
                    await browser.tabs.remove(tabsToClose);
                    await loadTabs();
                    updateUI();
                };
                
                tabDiv.appendChild(tabInfo);
                tabDiv.appendChild(closeBtn);
                listDiv.appendChild(tabDiv);
            }
        }
        
        // 创建合并所有按钮
        const actionBtn = document.createElement('button');
        actionBtn.className = 'suggestion-action-btn';
        actionBtn.textContent = isEnglish ? 'Merge All' : '合併全部';
        actionBtn.onclick = async () => {
            try {
                const promises = [];
                for (const [url, tabGroup] of urlMap) {
                    if (tabGroup.length > 1) {
                        const tabsToClose = tabGroup.slice(1).map(tab => tab.id);
                        promises.push(browser.tabs.remove(tabsToClose));
                    }
                }
                await Promise.all(promises);
                await loadTabs();
                updateUI();
            } catch (error) {
                console.error('Error merging tabs:', error);
            }
        };
        
        div.appendChild(textDiv);
        div.appendChild(listDiv);
        div.appendChild(actionBtn);
        suggestions.appendChild(div);
    }
    
    if (inactiveTabs.length > 0) {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        
        // 创建建议内容容器
        const textDiv = document.createElement('div');
        textDiv.className = 'suggestion-text';
        textDiv.textContent = isEnglish ?
            `Found ${inactiveTabs.length} tabs that haven't been used recently` :
            `發現 ${inactiveTabs.length} 個最近未使用的標籤頁`;
        
        // 创建标签列表容器
        const listDiv = document.createElement('div');
        listDiv.className = 'suggestion-list';
        
        // 添加不活跃标签到列表
        inactiveTabs.forEach(tab => {
            const tabDiv = document.createElement('div');
            tabDiv.className = 'suggestion-tab-item';
            
            const tabInfo = document.createElement('span');
            tabInfo.className = 'suggestion-tab-info';
            tabInfo.textContent = tab.title;
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'suggestion-tab-close';
            closeBtn.textContent = '✕';
            closeBtn.onclick = async (e) => {
                e.stopPropagation();
                await browser.tabs.remove(tab.id);
                await loadTabs();
                updateUI();
            };
            
            tabDiv.appendChild(tabInfo);
            tabDiv.appendChild(closeBtn);
            listDiv.appendChild(tabDiv);
        });
        
        // 创建关闭所有按钮
        const actionBtn = document.createElement('button');
        actionBtn.className = 'suggestion-action-btn';
        actionBtn.textContent = isEnglish ? 'Close All Inactive' : '關閉全部未使用';
        actionBtn.onclick = async () => {
            const tabIds = inactiveTabs.map(tab => tab.id);
            await browser.tabs.remove(tabIds);
            await loadTabs();
            updateUI();
        };
        
        div.appendChild(textDiv);
        div.appendChild(listDiv);
        div.appendChild(actionBtn);
        suggestions.appendChild(div);
    }
}

// 更新语言相关文本
function updateLanguageTexts() {
    // 更新搜索框占位符
    document.getElementById('searchInput').placeholder = isEnglish ? 'Search tabs...' : '搜尋標籤...';
    
    // 更新分组标题
    const groupTitles = {
        'aiGroup': ['AI Tools', 'AI 工具'],
        'socialGroup': ['Social Media', '社交媒體'],
        'toolsGroup': ['Tools', '工具'],
        'newsGroup': ['News', '新聞'],
        'docsGroup': ['Documents & Notes', '文件與筆記'],
        'learningGroup': ['Learning', '學習'],
        'workGroup': ['Work', '工作'],
        'entertainmentGroup': ['Entertainment', '娛樂'],
        'shoppingGroup': ['Shopping', '購物'],
        'otherGroup': ['Others', '其他']
    };

    Object.entries(groupTitles).forEach(([id, [en, zh]]) => {
        const header = document.getElementById(id).querySelector('h3');
        header.textContent = isEnglish ? en : zh;
    });

    // 更新建议标题和内容
    const suggestionsContainer = document.querySelector('.suggestions-container');
    suggestionsContainer.querySelector('h3').textContent = isEnglish ? 'Suggestions' : '建議';
    
    // 更新统计信息
    updateStats();
} 