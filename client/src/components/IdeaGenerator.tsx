import React, { useState } from 'react';

interface GeneratorFormData {
  contentType: string;
  industry: string;
  audience: string;
  tone: string;
  keywords: string;
}

interface IdeaGeneratorProps {
  onIdeaGenerated?: (ideas: string[]) => void;
}

const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ onIdeaGenerated }) => {
  const [formData, setFormData] = useState<GeneratorFormData>({
    contentType: 'blog',
    industry: '',
    audience: '',
    tone: 'informative',
    keywords: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would normally call the API
      // In a real implementation, we would fetch from our backend
      // const response = await fetch('/api/ideas/generate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      
      // For now, simulate API response
      setTimeout(() => {
        const mockIdeas = [
          `How to Leverage ${formData.industry} Trends for ${formData.audience} in 2025`,
          `10 ${formData.tone.charAt(0).toUpperCase() + formData.tone.slice(1)} Ways to Connect with ${formData.audience} Through ${formData.industry} Content`,
          `The Ultimate Guide to ${formData.keywords || formData.industry} for Modern ${formData.audience}`,
          `Why ${formData.audience} Are Changing Their Approach to ${formData.industry}`,
          `${formData.industry} Strategies: What ${formData.audience} Really Want in 2025`
        ];
        
        if (onIdeaGenerated) {
          onIdeaGenerated(mockIdeas);
        }
        
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error generating ideas:', error);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Generate Content Ideas</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Content Type</label>
          <select
            name="contentType"
            value={formData.contentType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="blog">Blog Post</option>
            <option value="video">Video</option>
            <option value="social">Social Media</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Industry/Niche</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="e.g. Finance, Tech, Health"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Target Audience</label>
          <input
            type="text"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            placeholder="e.g. Millennials, Small Business Owners"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Content Tone</label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="informative">Informative</option>
            <option value="conversational">Conversational</option>
            <option value="professional">Professional</option>
            <option value="humorous">Humorous</option>
            <option value="inspirational">Inspirational</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Keywords (optional)</label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="e.g. investment, strategy, planning"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Generating Ideas...' : 'Generate Ideas'}
        </button>
      </form>
    </div>
  );
};

export default IdeaGenerator;