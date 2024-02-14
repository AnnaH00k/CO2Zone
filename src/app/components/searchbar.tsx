// Import locales and specify its type
"use client";
import { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { locales } from '../../i18nConfig';




interface SearchResult {
    fileName: string;
    matches: string[];
  }

  interface Locales {
    [key: string]: Record<string, string>;
  }


const SearchBar: React.FC = () => {

const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
const [showChat, setShowChat] = useState(false);
const locales: Locales = {
    // your locales object here
  };

const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
};

const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchForMatches();
};

const searchForMatches = () => {
    const matchingResults: SearchResult[] = [];
    
    // Iterate over each key in the locales object
    for (const key of Object.keys(locales)) {
      const folderContent: Record<string, string> = locales[key];
  
      // Iterate over each key-value pair in the folderContent
      for (const fileName of Object.keys(folderContent)) {
        const fileContent = folderContent[fileName];
  
        // Check if the fileContent contains the searchQuery
        if (typeof fileContent === 'string' && fileContent.includes(searchQuery)) {
          // If it does, add it to matchingResults
          matchingResults.push({ fileName, matches: [fileContent] });
        }
      }
    }
  
    // Update searchResults state and set showChat to true
    setSearchResults(matchingResults);
    setShowChat(true);
  };
  
  
  
  

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className='flex flex-row items-center'>
        <input onChange={handleSearchInputChange} value={searchQuery} type="search" placeholder="Search" />
        <button type="submit" title="Search"><MagnifyingGlass size={25} /></button>
      </form>

      {showChat && (
        <div className="chat">
          <div className="chat-message">
            {searchResults.length > 0 ? (
              <p>Found {searchResults.length} result(s).</p>
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
