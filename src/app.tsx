
import { useState, useEffect, useRef } from 'preact/hooks';
import type { JSX } from 'preact';



interface GeneratedImage {
  url: string;
  prompt: string;
  revisedPrompt?: string;
}

interface IconProps {
  className?: string;
}

// Icon Components
const Search = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const Loader2 = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`animate-spin ${className}`}>
    <path d="M21 12a9 9 0 11-6.219-8.56" />
  </svg>
);

const Sparkles = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const ImageIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

const Type = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="4,7 4,4 20,4 20,7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

const Zap = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);

const Brain = ({ className = "" }: IconProps): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.071-.264.134-.534.134-.538a3 3 0 0 0 2.769-3.806 4 4 0 0 0 .263-6.224c-.071-2.048-1.276-3.95-3.682-4.112A3 3 0 0 0 12 5Z" />
    <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588 4 4 0 0 1-7.636 2.106 3.2 3.2 0 0 1-.164-.546c-.071-.264-.134-.534-.134-.538a3 3 0 0 1-2.769-3.806 4 4 0 0 1-.263-6.224C10.072 6.444 11.276 4.542 13.682 4.38A3 3 0 0 1 12 5Z" />
  </svg>
);

// Hero Section Component
const HeroSection = ({ onTryDemo }: { onTryDemo: () => void }): JSX.Element => (
  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
    <div className="absolute inset-0 bg-gray-100 opacity-40"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        AI-Powered
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
          Search & Creation
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Harness the power of advanced AI to discover information instantly and generate stunning visuals.
        One platform, infinite possibilities.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button
          onClick={onTryDemo}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Try Demo Now
        </button>
        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition-colors duration-200">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <Brain className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
          <h3 className="font-semibold text-gray-800 mb-2">Smart Suggestions</h3>
          <p className="text-gray-600 text-sm">AI-powered autocomplete that understands context</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <ImageIcon className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
          <h3 className="font-semibold text-gray-800 mb-2">Image Generation</h3>
          <p className="text-gray-600 text-sm">Create stunning visuals from text descriptions</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <Zap className="w-8 h-8 text-pink-600 mb-4 mx-auto" />
          <h3 className="font-semibold text-gray-800 mb-2">Lightning Fast</h3>
          <p className="text-gray-600 text-sm">Optimized debouncing for instant responses</p>
        </div>
      </div>
    </div>
  </div>
);

// Mode Toggle Component
const ModeToggle = ({ mode, onToggle }: { mode: 'text' | 'image'; onToggle: () => void }): JSX.Element => (
  <div className="flex mb-6 bg-gray-100 rounded-xl p-1 w-fit mx-auto">
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 font-medium ${mode === 'text'
          ? 'bg-white shadow-sm text-blue-600'
          : 'text-gray-600 hover:text-gray-800'
        }`}
    >
      <Type className="w-4 h-4" />
      Text Search
    </button>
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 font-medium ${mode === 'image'
          ? 'bg-white shadow-sm text-purple-600'
          : 'text-gray-600 hover:text-gray-800'
        }`}
    >
      <ImageIcon className="w-4 h-4" />
      Image Generation
    </button>
  </div>
);

// Search Input Component
const SearchInput = ({
  mode,
  query,
  isLoading,
  inputRef,
  onInputChange,
  onKeyDown
}: {
  mode: 'text' | 'image';
  query: string;
  isLoading: boolean;
  inputRef: { current: HTMLInputElement | null };
  onInputChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  onKeyDown: (e: JSX.TargetedKeyboardEvent<HTMLInputElement>) => void;
}): JSX.Element => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      {mode === 'text' ? (
        <Search className="h-6 w-6 text-gray-400" />
      ) : (
        <ImageIcon className="h-6 w-6 text-gray-400" />
      )}
    </div>

    <input
      ref={inputRef}
      type="text"
      value={query}
      onInput={onInputChange}
      onKeyDown={onKeyDown}
      placeholder={mode === 'text' ? 'Search anything...' : 'Describe an image to generate...'}
      className={`block w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl text-lg
                 focus:ring-2 ${mode === 'text' ? 'focus:ring-blue-500 focus:border-blue-500' : 'focus:ring-purple-500 focus:border-purple-500'} 
                 text-gray-900 placeholder-gray-500 bg-white shadow-lg
                 transition-all duration-200 hover:shadow-xl`}
      autoComplete="off"
    />

    {isLoading && (
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
        <Loader2 className={`h-6 w-6 ${mode === 'text' ? 'text-blue-500' : 'text-purple-500'}`} />
      </div>
    )}
  </div>
);

// Suggestions Dropdown Component
const SuggestionsDropdown = ({
  suggestions,
  selectedIndex,
  onSuggestionClick
}: {
  suggestions: string[];
  selectedIndex: number;
  onSuggestionClick: (suggestion: string) => void;
}): JSX.Element => (
  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-80 overflow-y-auto">
    {suggestions.map((suggestion: string, index: number) => (
      <div
        key={`${suggestion}-${index}`}
        onClick={() => onSuggestionClick(suggestion)}
        className={`px-6 py-4 cursor-pointer transition-colors duration-150 ${index === selectedIndex
            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
            : 'text-gray-700 hover:bg-gray-50'
          } ${index === 0 ? 'rounded-t-xl' : ''} ${index === suggestions.length - 1 ? 'rounded-b-xl' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-gray-400" />
          <span className="text-base">{suggestion}</span>
        </div>
      </div>
    ))}
  </div>
);

// Images Gallery Component
const ImagesGallery = ({ images }: { images: GeneratedImage[] }): JSX.Element => (
  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto">
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img: GeneratedImage, index: number) => (
        <div key={`${img.url}-${index}`} className="group relative">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={img.url}
              alt={img.prompt}
              className="w-full h-40 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
              onClick={() => window.open(img.url, '_blank')}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-600 font-medium line-clamp-2">{img.prompt}</p>
            {img.revisedPrompt && img.revisedPrompt !== img.prompt && (
              <p className="text-xs text-purple-600 mt-1 line-clamp-1 italic">
                Revised: {img.revisedPrompt}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Demo Section Component
const DemoSection = ({
  mode,
  query,
  suggestions,
  generatedImages,
  isLoadingText,
  isLoadingImage,
  showSuggestions,
  showImages,
  selectedIndex,
  inputRef,
  onInputChange,
  onKeyDown,
  onSuggestionClick,
  onToggleMode
}: {
  mode: 'text' | 'image';
  query: string;
  suggestions: string[];
  generatedImages: GeneratedImage[];
  isLoadingText: boolean;
  isLoadingImage: boolean;
  showSuggestions: boolean;
  showImages: boolean;
  selectedIndex: number;
  inputRef: { current: HTMLInputElement | null };
  onInputChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  onKeyDown: (e: JSX.TargetedKeyboardEvent<HTMLInputElement>) => void;
  onSuggestionClick: (suggestion: string) => void;
  onToggleMode: () => void;
}): JSX.Element => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Magic</h2>
        <p className="text-xl text-gray-600">Try our AI-powered tools right here, right now</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <ModeToggle mode={mode} onToggle={onToggleMode} />

        <div className="relative max-w-2xl mx-auto">
          <SearchInput
            mode={mode}
            query={query}
            isLoading={isLoadingText || isLoadingImage}
            inputRef={inputRef}
            onInputChange={onInputChange}
            onKeyDown={onKeyDown}
          />

          {/* Text Suggestions */}
          {mode === 'text' && showSuggestions && suggestions.length > 0 && (
            <SuggestionsDropdown
              suggestions={suggestions}
              selectedIndex={selectedIndex}
              onSuggestionClick={onSuggestionClick}
            />
          )}

          {/* Generated Images */}
          {mode === 'image' && showImages && generatedImages.length > 0 && (
            <ImagesGallery images={generatedImages} />
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
          <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            How to Use This Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-700">
            <div>
              <strong className="text-amber-800">Text Mode:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Type to get AI suggestions</li>
                <li>• Use arrow keys to navigate</li>
                <li>• Press Enter to select</li>
              </ul>
            </div>
            <div>
              <strong className="text-amber-800">Image Mode:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Describe what you want to see</li>
                <li>• Wait for DALL-E to generate</li>
                <li>• Click images to view full size</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
export const App = (): JSX.Element => {
  // State management
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingText, setIsLoadingText] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [mode, setMode] = useState<'text' | 'image'>('text');
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
  const [showImages, setShowImages] = useState<boolean>(false);
  const [_, setShowDemo] = useState<boolean>(false);

  // Refs
  const textDebounceRef = useRef<NodeJS.Timeout | null>(null);
  const imageDebounceRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  // Fetch suggestions function
  const fetchSuggestions = async (searchQuery: string): Promise<void> => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoadingText(true);

    try {
      // Mock suggestions for demo (replace with actual API call)
      const mockSuggestions = [
        `${searchQuery} tutorial`,
        `${searchQuery} examples`,
        `${searchQuery} best practices`,
        `how to ${searchQuery}`,
        `${searchQuery} documentation`
      ];

      setTimeout(() => {
        setSuggestions(mockSuggestions);
        setShowSuggestions(true);
        setIsLoadingText(false);
      }, 300);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setIsLoadingText(false);
    }
  };

  // Generate images function
  const generateImages = async (prompt: string): Promise<void> => {
    if (!prompt.trim() || prompt.length < 3) {
      setGeneratedImages([]);
      setShowImages(false);
      return;
    }

    setIsLoadingImage(true);

    try {
      // Mock image generation for demo (replace with actual DALL-E API call)
      const mockImage: GeneratedImage = {
        url: `https://picsum.photos/400/400?random=${Date.now()}`,
        prompt: prompt,
        revisedPrompt: `Enhanced: ${prompt} with artistic style`
      };

      setTimeout(() => {
        setGeneratedImages(prev => [mockImage, ...prev].slice(0, 6));
        setShowImages(true);
        setIsLoadingImage(false);
      }, 800);
    } catch (error) {
      console.error('Error generating image:', error);
      setIsLoadingImage(false);
    }
  };

  // Event handlers
  const handleInputChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>): void => {
    const value: string = e.currentTarget.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (mode === 'text') {
      if (textDebounceRef.current) clearTimeout(textDebounceRef.current);
      textDebounceRef.current = setTimeout(() => fetchSuggestions(value), 300);
    } else {
      if (imageDebounceRef.current) clearTimeout(imageDebounceRef.current);
      imageDebounceRef.current = setTimeout(() => generateImages(value), 800);
    }
  };

  const handleKeyDown = (e: JSX.TargetedKeyboardEvent<HTMLInputElement>): void => {
    if (mode === 'text' && showSuggestions) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : prev);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            setQuery(suggestions[selectedIndex]);
            setShowSuggestions(false);
          }
          break;
        case 'Escape':
          setShowSuggestions(false);
          setSelectedIndex(-1);
          break;
      }
    } else if (mode === 'image' && e.key === 'Enter') {
      e.preventDefault();
      generateImages(query);
    }
  };

  const handleSuggestionClick = (suggestion: string): void => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const toggleMode = (): void => {
    const newMode = mode === 'text' ? 'image' : 'text';
    setMode(newMode);
    setShowSuggestions(false);
    setShowImages(false);
    setSelectedIndex(-1);

    if (textDebounceRef.current) clearTimeout(textDebounceRef.current);
    if (imageDebounceRef.current) clearTimeout(imageDebounceRef.current);
  };

  const handleTryDemo = (): void => {
    setShowDemo(true);
    setTimeout(() => {
      demoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Effects
  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      const target = event.target as Node;
      if (inputRef.current && !inputRef.current.contains(target)) {
        setShowSuggestions(false);
        setShowImages(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (textDebounceRef.current) clearTimeout(textDebounceRef.current);
      if (imageDebounceRef.current) clearTimeout(imageDebounceRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onTryDemo={handleTryDemo} />

      {/* Demo Section */}
      <div ref={demoRef}>
        <DemoSection
          mode={mode}
          query={query}
          suggestions={suggestions}
          generatedImages={generatedImages}
          isLoadingText={isLoadingText}
          isLoadingImage={isLoadingImage}
          showSuggestions={showSuggestions}
          showImages={showImages}
          selectedIndex={selectedIndex}
          inputRef={inputRef}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onSuggestionClick={handleSuggestionClick}
          onToggleMode={toggleMode}
        />
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};
