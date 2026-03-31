// Data
const placeData = [
    {
        id: "p1",
        name: "4233 마음센터 광안리",
        category: "이색체험",
        region: "광안리",
        duration: 90, // minutes
        price: 25000,
        description: "우리 사이를 더 깊게 알아가는 심리 체험형 전시. 요즘 커플 대세 코스!",
        image: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/4233 마음센터 광안리",
        open_hours: "10:00 - 21:00 (월 휴무)",
        night_available: true,
        crowd_level: "보통",
        recommendation: 4.8
    },
    {
        id: "p2",
        name: "광안리 M드론쇼",
        category: "야경",
        region: "광안리",
        duration: 30,
        price: 0,
        description: "매주 토요일 밤, 광안대교 앞 밤하늘을 수놓는 로맨틱한 드론쇼.",
        image: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/광안리해수욕장",
        open_hours: "매주 토 20:00 & 22:00",
        night_available: true,
        crowd_level: "매우높음",
        recommendation: 4.9
    },
    {
        id: "p3",
        name: "런닝맨 부산점",
        category: "액티비티",
        region: "서면",
        duration: 60,
        price: 19000,
        description: "TV 속 런닝맨이 되어 땀나게 뛰어노는 실내 액티비티 끝판왕.",
        image: "https://images.unsplash.com/photo-1576613109753-27804de2cba8?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/런닝맨 부산점",
        open_hours: "10:00 - 20:00 (입장마감 19:00)",
        night_available: false,
        crowd_level: "높음",
        recommendation: 4.5
    },
    {
        id: "p4",
        name: "웨이브락 클라이밍 (서면/광안)",
        category: "액티비티",
        region: "서면",
        duration: 120,
        price: 20000,
        description: "초보자도 환영! 밤늦게까지 즐기는 짜릿한 실내 볼더링 데이트.",
        image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/웨이브락 클라이밍",
        open_hours: "평일 12:00-22:30 / 주말 10:00-20:00",
        night_available: true,
        crowd_level: "보통",
        recommendation: 4.7
    },
    {
        id: "p5",
        name: "부산 실내 빙상장",
        category: "액티비티",
        region: "기타",
        duration: 120,
        price: 8000,
        description: "손잡고 스케이트 타며 은근슬쩍 스킨십하기 좋은 가성비 데이트.",
        image: "https://images.unsplash.com/photo-1522159020478-fded586eb49a?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/부산북구문화빙상센터 빙상장",
        open_hours: "09:00 - 18:00 (월 휴무)",
        night_available: false,
        crowd_level: "보통",
        recommendation: 4.3
    },
    {
        id: "p6",
        name: "밀락더마켓",
        category: "실내",
        region: "광안리",
        duration: 90,
        price: 15000,
        description: "밤바다 피크닉 뷰, 감각적인 편집숍과 푸드코트를 갖춘 복합문화공간.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/밀락더마켓",
        open_hours: "10:00 - 24:00",
        night_available: true,
        crowd_level: "높음",
        recommendation: 4.6
    },
    {
        id: "p7",
        name: "해운대 더베이101",
        category: "야경",
        region: "해운대",
        duration: 60,
        price: 0,
        description: "마천루 야경을 배경으로 인생샷 남기고 요트까지 탈 수 있는 핫플.",
        image: "https://images.unsplash.com/photo-1582239497138-16ec217c4915?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/더베이101",
        open_hours: "09:00 - 24:00",
        night_available: true,
        crowd_level: "높음",
        recommendation: 4.7
    },
    {
        id: "p8",
        name: "아르떼뮤지엄 부산 (영도)",
        category: "실내",
        region: "기타",
        duration: 120,
        price: 22000,
        description: "환상적인 미디어아트로 가득한 몰입형 전시. 프사 바꾸기 딱 좋은 분위기.",
        image: "https://images.unsplash.com/photo-1518998053401-878c735cd217?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/아르떼뮤지엄 부산",
        open_hours: "10:00 - 20:00 (입장마감 19:00)",
        night_available: false,
        crowd_level: "보통",
        recommendation: 4.8
    },
    {
        id: "p9",
        name: "센텀 신세계 스파랜드",
        category: "실내",
        region: "해운대",
        duration: 240,
        price: 23000,
        description: "고급스러운 찜질방 데이트의 정석. 따뜻하게 피로 풀기 참 좋은 곳.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/신세계센텀시티 스파랜드",
        open_hours: "09:00 - 22:00",
        night_available: true,
        crowd_level: "높음",
        recommendation: 4.9
    }
];

const foodData = [
    {
        id: "f1",
        name: "해성막창집 본점",
        category: "고기",
        region: "해운대",
        duration: 90,
        price: 25000, // 1인 기준 환산
        description: "해운대 야간 데이트의 정석. 소막창과 대창전골이 진짜 미쳤어요.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/해성막창집 본점",
        open_hours: "16:00 - 02:00",
        night_available: true,
        crowd_level: "높음(웨이팅)",
        recommendation: 4.8
    },
    {
        id: "f2",
        name: "야키토리 해공",
        category: "노포/로컬",
        region: "광안리",
        duration: 90,
        price: 35000,
        description: "공연 한 편을 보는 듯한 야키바. 고급스러운 분위기에 취하는 숯불 야키토리 바.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/야키토리 해공",
        open_hours: "18:00 - 01:00",
        night_available: true,
        crowd_level: "보통(예약권장)",
        recommendation: 4.9
    },
    {
        id: "f3",
        name: "바오하우스",
        category: "레스토랑",
        region: "서면",
        duration: 60,
        price: 15000,
        description: "미쉐린 빕 구르망 대만음식점! 가지튀김과 마파두부가 압도적으로 맛있어요.",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/바오하우스",
        open_hours: "11:30 - 21:00",
        night_available: false,
        crowd_level: "높음",
        recommendation: 4.8
    },
    {
        id: "f4",
        name: "이재모피자 서면점",
        category: "레스토랑",
        region: "서면",
        duration: 60,
        price: 15000,
        description: "부산 로컬들이 찐으로 추천하는 치즈 폭포 피자. 실패 없는 선택.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/이재모피자 서면",
        open_hours: "11:00 - 21:30",
        night_available: false,
        crowd_level: "높음",
        recommendation: 4.9
    },
    {
        id: "f5",
        name: "거대돼지국밥",
        category: "노포/로컬",
        region: "해운대",
        duration: 60,
        price: 12000,
        description: "완전히 세련되고 깔끔한 진주 국물 돼지국밥. 고소한 자가제면 밀면까지 완벽.",
        image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/거대돼지국밥",
        open_hours: "09:00 - 21:00",
        night_available: false,
        crowd_level: "보통",
        recommendation: 4.7
    },
    {
        id: "f6",
        name: "안목 (ANMOK)",
        category: "노포/로컬",
        region: "광안리",
        duration: 40,
        price: 10000,
        description: "미쉐린 등재. 초보자도 쉽게 즐길 수 있는 엄청나게 깔끔하고 정제된 돼지국밥.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/안목",
        open_hours: "11:30 - 21:00 (월 휴무)",
        night_available: false,
        crowd_level: "높음",
        recommendation: 4.8
    },
    {
        id: "f7",
        name: "백화양곱창",
        category: "고기",
        region: "기타", // 남포/자갈치
        duration: 90,
        price: 35000,
        description: "연탄불에 구워먹는 양곱창. 왁자지껄한 찐 남포동 노포 분위기를 사랑한다면 강추.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/백화양곱창",
        open_hours: "12:00 - 24:00 (1,3주 일 당번제)",
        night_available: true,
        crowd_level: "높음",
        recommendation: 4.6
    },
    {
        id: "f8",
        name: "랑데자뷰 해운대",
        category: "디저트",
        region: "해운대",
        duration: 60,
        price: 7000,
        description: "제주도 감성의 탁 트인 오션뷰 대형 카페. 식사 후 커피 한잔하며 물멍 타임.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=480",
        map_link: "https://map.naver.com/v5/search/랑데자뷰 해운대",
        open_hours: "09:30 - 23:30",
        night_available: true,
        crowd_level: "보통",
        recommendation: 4.4
    }
];

// App State
let appData = [];
let currentRegionFilter = 'all';
let currentCategoryFilter = 'all';
let filterNightOnly = false;
let currentSort = 'recommend';
let searchQuery = '';

// DOM Elements
const mainContainer = document.getElementById('mainContainer');
const topPicksContainer = document.getElementById('topPicksContainer');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const nightToggle = document.getElementById('nightToggle');
const sortSelect = document.getElementById('sortSelect');

// Init
document.addEventListener('DOMContentLoaded', () => {
    if (window.APP_PAGE_TYPE === 'food') {
        appData = foodData;
    } else {
        appData = placeData;
    }
    setupEventListeners();
    renderApp();
});

function setupEventListeners() {
    // Filter Chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            const parent = e.target.closest('.chip-slider');
            if(parent) {
                 parent.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                 e.target.classList.add('active');
                 
                 const filterVal = e.target.dataset.filter;
                 if(parent.id === 'regionFilters') currentRegionFilter = filterVal;
                 if(parent.id === 'categoryFilters') currentCategoryFilter = filterVal;
                 
                 renderApp();
            }
        });
    });

    // Toggle
    if (nightToggle) {
        nightToggle.addEventListener('click', () => {
            filterNightOnly = !filterNightOnly;
            nightToggle.setAttribute('aria-pressed', filterNightOnly);
            renderApp();
        });
    }

    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderApp();
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderApp();
        });
    }
}

function renderApp() {
    // 1. Filter
    let filtered = appData.filter(item => {
        let matchRegion = currentRegionFilter === 'all' || item.region === currentRegionFilter;
        let matchCat = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
        let matchSearch = item.name.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
        let matchNight = !filterNightOnly || item.night_available;
        return matchRegion && matchCat && matchSearch && matchNight;
    });

    // 2. Sort
    filtered.sort((a, b) => {
        if(currentSort === 'recommend') return b.recommendation - a.recommendation;
        if(currentSort === 'price_asc') return a.price - b.price;
        if(currentSort === 'time_asc') return a.duration - b.duration;
        return 0;
    });

    if (resultCount) {
        resultCount.textContent = filtered.length;
    }

    // 3. Render Top Picks
    if(topPicksContainer) {
        let topPicks = [...filtered].sort((a,b) => b.recommendation - a.recommendation).slice(0, 2);
        topPicksContainer.innerHTML = topPicks.map(item => createCardHTML(item, true)).join('');
        
        const topSection = document.getElementById('topPicksSection');
        if(topPicks.length === 0) topSection.style.display = 'none';
        else topSection.style.display = 'block';
    }

    // 4. Render Main List (With Nearby Badge Logic)
    if (mainContainer) {
        if (filtered.length === 0) {
            mainContainer.innerHTML = `
                <div class="empty-state">
                    <span class="material-symbols-outlined">sentiment_dissatisfied</span>
                    <p>조건에 맞는 곳이 없어요.<br>필터를 조금 완화해 볼까요?</p>
                </div>
            `;
            return;
        }

        mainContainer.innerHTML = filtered.map((item, index) => {
            let isNearbyRecommended = false;
            // 만약 사용자가 필터링한 첫 1위 지역과 위치가 겹치면 배지 생성
            if (index > 0 && index < 4 && filtered[0].region === item.region && item.region !== '기타') {
                isNearbyRecommended = true;
            }
            return createCardHTML(item, false, isNearbyRecommended);
        }).join('');
    }
}

// 가독성 높은 Grid 기반의 Meta 데이터 렌더링
function createCardHTML(item, isMini = false, isNearbyRecommended = false) {
    const formatPrice = (price) => price === 0 ? '무료' : price.toLocaleString() + '원';
    const cardClass = isMini ? 'card mini' : 'card';
    
    // Create badges
    let badges = `<span class="badge region">${item.region}</span><span class="badge">${item.category}</span>`;
    
    if (item.night_available && window.APP_PAGE_TYPE === 'place') badges += `<span class="badge recommend">밤에도 핫플 🔥</span>`;
    if (item.night_available && window.APP_PAGE_TYPE === 'food') badges += `<span class="badge recommend">심야식당 🌙</span>`;
    if (isNearbyRecommended) badges += `<span class="badge" style="background:#6C5CE7; color:white;">📍 첫번째 근처</span>`;

    return `
    <div class="${cardClass}" onclick="openMap('${item.map_link}')">
        <div style="position: relative;">
            <img class="card-img" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-badges">${badges}</div>
        </div>
        <div class="card-content">
            <div class="card-header">
                <h3 class="card-title">${item.name}</h3>
            </div>
            <p class="card-desc">${item.description}</p>
            
            <div class="card-meta-grid">
                <div class="meta-item"><span class="material-symbols-outlined">schedule</span>${item.duration}분 예상</div>
                <div class="meta-item"><span class="material-symbols-outlined">payments</span>${formatPrice(item.price)}</div>
                <div class="meta-item"><span class="material-symbols-outlined">groups</span>${item.crowd_level}</div>
                <div class="meta-item rating"><span class="material-symbols-outlined">star</span>평점 ${item.recommendation.toFixed(1)}</div>
                <div class="meta-item full-width"><span class="material-symbols-outlined">info</span>운영 | ${item.open_hours}</div>
            </div>

            ${!isMini ? `
            <a href="${item.map_link}" target="_blank" class="map-link" onclick="event.stopPropagation();">
                <span class="material-symbols-outlined">location_on</span> 
                내비게이션 및 리뷰 보기
            </a>` : ''}
        </div>
    </div>
    `;
}

function openMap(url) {
    window.open(url, '_blank');
}
