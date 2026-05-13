import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Search, Heart, Share2, Copy, Shuffle, CheckCircle2, Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import { prayers, categories, Prayer } from './data/prayers';

const getCategoryEmoji = (cat: string) => {
  const emojis: Record<string, string> = {
    "Semua": "🌟",
    "Sedih": "😔",
    "Gelisah": "😰",
    "Susah Tidur": "💤",
    "Ingin Rezeki": "💰",
    "Takut": "😨",
    "Marah": "💢",
    "Sakit": "🤒",
    "Ingin Dimudahkan": "🗝️",
    "Bersyukur": "🙌",
    "Mohon Ampunan": "🤲",
    "Semangat Hidup": "🔥",
    "Hati Tenang": "🌿",
  };
  return emojis[cat] || "✨";
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedFavorites = localStorage.getItem('favorites');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    showToast(favorites.includes(id) ? 'Dihapus dari Favorit' : 'Disimpan ke Favorit');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopy = async (prayer: Prayer) => {
    const text = `${prayer.judul}\n\n${prayer.arab}\n\n${prayer.latin}\n\nArtinya: ${prayer.arti}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Doa berhasil disalin');
    } catch (err) {
      showToast('Gagal menyalin doa');
    }
  };

  const handleShare = async (prayer: Prayer) => {
    const text = `${prayer.judul}\n\n${prayer.arab}\n\nArtinya: ${prayer.arti}\n\n- Doa Harian Berdasarkan Situasi`;
    if (navigator.share) {
      try {
        await navigator.share({
           title: prayer.judul,
           text: text
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopy(prayer);
      showToast('Disalin untuk dibagikan');
    }
  };

  const handleRandom = () => {
    const randomId = prayers[Math.floor(Math.random() * prayers.length)].id;
    setSearchQuery('');
    setSelectedCategory('Semua');
    setShowFavoritesOnly(false);
    
    // Find the random prayer and briefly flash it or scroll to it
    const el = document.getElementById(randomId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const filteredPrayers = useMemo(() => {
    let result = prayers;
    
    if (showFavoritesOnly) {
      result = result.filter(p => favorites.includes(p.id));
    }
    
    if (selectedCategory !== 'Semua' && !showFavoritesOnly) {
      result = result.filter(p => p.kategori.includes(selectedCategory));
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.judul.toLowerCase().includes(q) || 
        p.kategori.some(k => k.toLowerCase().includes(q)) ||
        p.arti.toLowerCase().includes(q)
      );
    }
    
    return result;
  }, [searchQuery, selectedCategory, favorites, showFavoritesOnly]);

  return (
    <div className="flex flex-col h-full w-full bg-[#f8fafc] dark:bg-black text-[#1e293b] dark:text-slate-100 font-sans overflow-hidden transition-colors duration-300 relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 dark:bg-zinc-800 text-white dark:text-zinc-100 px-5 py-3 rounded-full shadow-2xl flex items-center space-x-2 font-medium border dark:border-zinc-700"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-emerald-500" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="h-20 bg-[#064e3b] dark:bg-[#0a0a0a] text-white flex items-center justify-between px-4 lg:px-8 shadow-lg border-b-4 border-[#d4af37] dark:border-emerald-800 shrink-0 z-20 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#d4af37] dark:bg-emerald-900 rounded-full flex items-center justify-center shadow-inner shrink-0 transition-colors">
            <Moon className="w-6 h-6 md:w-8 md:h-8 text-[#064e3b] dark:text-emerald-300" />
          </div>
          <div>
            <h1 className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight uppercase">
              Doa Harian 
            </h1>
            <p className="text-[10px] md:text-xs text-[#d4af37] font-medium tracking-widest hidden md:block">BERDASARKAN SITUASI &bull; MODERN ISLAMIC TOOL</p>
          </div>
        </div>
        
        <div className="flex gap-3 items-center">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Cari situasi..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#059669] text-sm border border-[#059669] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-emerald-200 text-white w-64"
            />
            <Search className="w-4 h-4 absolute left-4 top-2.5 text-emerald-200" />
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-emerald-700 text-[#d4af37] transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            onClick={() => {
              setShowFavoritesOnly(!showFavoritesOnly);
              setSelectedCategory('Semua');
            }}
            className={`p-2 rounded-full transition-colors ${showFavoritesOnly ? 'bg-white text-red-500' : 'hover:bg-emerald-700 text-[#d4af37]'}`}
          >
            <Heart className={showFavoritesOnly ? "w-6 h-6 fill-current" : "w-6 h-6"} />
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden islamic-pattern relative">
        
        {/* Sidebar for Desktop */}
        <aside className="w-72 bg-white dark:bg-[#0a0a0a] border-r border-[#064e3b]/10 dark:border-zinc-800 p-6 flex-col gap-4 overflow-y-auto hidden md:flex shrink-0 shadow-xl z-10 transition-colors">
          <h2 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Pilih Situasi Anda</h2>
          
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setShowFavoritesOnly(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all shadow-sm ${
                selectedCategory === 'Semua' && !showFavoritesOnly
                  ? 'bg-[#064e3b] dark:bg-emerald-900/40 text-white border-l-4 border-[#d4af37] dark:border-emerald-500'
                  : 'bg-white dark:bg-[#121212] text-gray-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-zinc-800 border border-gray-100 dark:border-zinc-800'
              }`}
            >
              <span className="text-lg">🌟</span>
              <span className={selectedCategory === 'Semua' && !showFavoritesOnly ? 'font-semibold' : 'font-medium'}>Semua</span>
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFavoritesOnly(false);
                }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all shadow-sm ${
                  selectedCategory === category && !showFavoritesOnly
                    ? 'bg-[#064e3b] dark:bg-emerald-900/40 text-white border-l-4 border-[#d4af37] dark:border-emerald-500'
                    : 'bg-white dark:bg-[#121212] text-gray-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-zinc-800 border border-gray-100 dark:border-zinc-800'
                }`}
              >
                <span className="text-lg">{getCategoryEmoji(category)}</span>
                <span className={selectedCategory === category && !showFavoritesOnly ? 'font-semibold' : 'font-medium'}>{category}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={handleRandom}
            className="mt-4 flex items-center justify-center gap-2 py-3 bg-[#d4af37] text-[#064e3b] font-bold rounded-xl shadow-lg border border-[#b8860b] hover:brightness-105 transition-all"
          >
            <Shuffle className="w-5 h-5" /> Doa Acak
          </button>

          <footer className="mt-auto pt-6 text-[10px] text-gray-400 dark:text-zinc-600 font-bold tracking-[0.2em] uppercase text-center border-t border-gray-200 dark:border-zinc-800">
            <div>&copy; {new Date().getFullYear()} DOA HARIAN</div>
            <div className="mt-1">PREMIUM ISLAMIC CONTENT</div>
          </footer>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 p-4 md:p-8 flex flex-col items-center overflow-y-auto">
          
          {/* Mobile view controls */}
          <div className="w-full max-w-3xl md:hidden mb-6 flex flex-col gap-3 shrink-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari situasi..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-[#121212] text-sm border border-emerald-200 dark:border-zinc-800 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-slate-800 dark:text-zinc-200 placeholder-gray-400 dark:placeholder-zinc-600"
              />
              <Search className="w-5 h-5 absolute left-3 top-3 text-emerald-600 dark:text-zinc-500" />
            </div>
            
            <div className="flex justify-between items-center px-1 mt-1">
              <span className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Pilih Situasi</span>
              <span className="text-[10px] flex items-center gap-1 text-emerald-600 dark:text-emerald-500 font-medium italic animate-pulse">Geser pilih situasi <ArrowRight className="w-3 h-3"/></span>
            </div>
            <div className="overflow-x-auto pb-2 flex gap-2 hide-scroll">
               {['Semua', ...categories].map(category => (
                 <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFavoritesOnly(false);
                    }}
                    className={`whitespace-nowrap shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all shadow-sm ${
                      selectedCategory === category && !showFavoritesOnly
                        ? 'bg-[#064e3b] dark:bg-emerald-900/40 text-white border-b-2 border-[#d4af37] dark:border-emerald-500'
                        : 'bg-white dark:bg-[#121212] text-gray-700 dark:text-zinc-300 border border-gray-100 dark:border-zinc-800'
                    }`}
                 >
                   <span>{getCategoryEmoji(category)}</span>
                   <span>{category}</span>
                 </button>
               ))}
               <button 
                  onClick={handleRandom}
                  className="whitespace-nowrap shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all shadow-sm bg-[#d4af37] dark:bg-[#d4af37]/90 text-[#064e3b] font-bold border border-[#b8860b]"
                >
                  <Shuffle className="w-4 h-4" /> Acak
                </button>
            </div>
          </div>

          <div className="w-full max-w-3xl flex flex-col gap-8 pb-20 mt-2 md:mt-0">
            <AnimatePresence>
              {filteredPrayers.length === 0 ? (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="text-center py-20 bg-white dark:bg-[#121212] rounded-3xl border border-emerald-100 dark:border-zinc-800 shadow-xl"
                 >
                    <div className="w-16 h-16 bg-emerald-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-[#064e3b] dark:text-zinc-500" />
                    </div>
                    <p className="text-lg font-bold text-[#064e3b] dark:text-zinc-300 mb-2">Tidak ditemukan</p>
                    <p className="text-slate-500 dark:text-zinc-500">
                      Coba cari dengan kata kunci lain atau pilih situasi yang berbeda.
                    </p>
                 </motion.div>
              ) : (
                filteredPrayers.map((prayer, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index > 5 ? 0 : index * 0.05 }}
                    key={prayer.id}
                    id={prayer.id}
                    className="w-full bg-white dark:bg-[#121212] rounded-3xl shadow-xl border border-emerald-100 dark:border-zinc-800 overflow-hidden relative group transition-colors"
                  >
                    {/* SVG Decor */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.02] pointer-events-none transition-opacity group-hover:opacity-10 dark:group-hover:opacity-5 text-[#064e3b] dark:text-emerald-500">
                      <svg className="w-32 h-32 md:w-48 md:h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                    </div>

                    {/* Card Header */}
                    <div className="bg-emerald-50 dark:bg-[#0a0a0a] px-6 py-4 border-b border-emerald-100 dark:border-zinc-800 flex justify-between items-center text-left">
                      <span className="text-[#064e3b] dark:text-emerald-500 font-bold text-xs md:text-sm tracking-widest uppercase truncate pr-4">
                        Situasi: {prayer.kategori.join(' & ')}
                      </span>
                      <button 
                        onClick={() => toggleFavorite(prayer.id)}
                        className={`text-[#d4af37] hover:text-[#b8860b] transition-transform hover:scale-110 shrink-0 ${favorites.includes(prayer.id) ? 'text-red-500 hover:text-red-600' : ''}`}
                      >
                         <Heart className={`w-6 h-6 ${favorites.includes(prayer.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-10 text-center relative z-10">
                      <h3 className="text-xl md:text-2xl font-serif text-[#064e3b] dark:text-emerald-400 mb-8 font-bold leading-snug">
                        {prayer.judul}
                      </h3>
                      
                      <p className="arabic-font text-4xl md:text-5xl leading-relaxed text-[#1e293b] dark:text-zinc-100 mb-8">
                        {prayer.arab}
                      </p>
                      
                      <p className="text-base md:text-lg italic text-emerald-800 dark:text-emerald-300/80 mb-6 font-medium">
                        "{prayer.latin}"
                      </p>
                      
                      <div className="bg-gray-50 dark:bg-[#0a0a0a] p-5 md:p-6 rounded-2xl mb-8 text-left border-l-4 border-emerald-500 shadow-sm">
                        <p className="text-xs text-gray-500 dark:text-zinc-500 font-semibold mb-2 tracking-widest uppercase">Arti:</p>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg italic">
                          "{prayer.arti}"
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-xs text-emerald-700 dark:text-emerald-400 font-medium justify-center items-center">
                        {prayer.keutamaan && (
                          <span className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 flex items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-800/40 uppercase tracking-tighter text-center">
                            KEUTAMAAN: {prayer.keutamaan}
                          </span>
                        )}
                        {prayer.referensi && (
                          <span className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 flex items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-800/40 uppercase tracking-tighter text-center">
                            SUMBER: {prayer.referensi}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="flex border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-[#0a0a0a]">
                      <button 
                        onClick={() => handleCopy(prayer)}
                        className="flex-1 py-4 flex items-center justify-center gap-2 text-[#064e3b] dark:text-emerald-500 font-bold border-r border-gray-200 dark:border-zinc-800 hover:bg-emerald-100 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <Copy className="w-5 h-5" /> <span className="hidden sm:inline">Salin Doa</span><span className="sm:hidden">Salin</span>
                      </button>
                      <button 
                        onClick={() => handleShare(prayer)}
                        className="flex-1 py-4 flex items-center justify-center gap-2 text-[#064e3b] dark:text-emerald-500 font-bold hover:bg-emerald-100 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <Share2 className="w-5 h-5" /> <span className="hidden sm:inline">Bagikan</span><span className="sm:hidden">Bagikan</span>
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;

