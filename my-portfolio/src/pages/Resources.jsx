const Resources = () => {
  const resources = [
    {
      category: 'Learning',
      items: [
        {
          title: 'Resource Title 1',
          description: 'A helpful resource description.',
          link: 'https://example.com',
        },
        {
          title: 'Resource Title 2',
          description: 'Another useful resource.',
          link: 'https://example.com',
        },
      ],
    },
    {
      category: 'Tools',
      items: [
        {
          title: 'Tool Name 1',
          description: 'Description of the tool.',
          link: 'https://example.com',
        },
        {
          title: 'Tool Name 2',
          description: 'Another tool description.',
          link: 'https://example.com',
        },
      ],
    },
    {
      category: 'Articles & Blogs',
      items: [
        {
          title: 'Article Title',
          description: 'An interesting article worth reading.',
          link: 'https://example.com',
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium">Resources</h1>
          <p className="text-lg text-gray-400">
            A curated list of resources I find valuable.
          </p>
        </div>

        <div className="space-y-16 pt-8">
          {resources.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h2 className="text-2xl font-medium">{section.category}</h2>
              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-l-2 border-gray-800 pl-6 space-y-2"
                  >
                    <h3 className="text-lg font-medium">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                      >
                        {item.title}
                        <svg
                          className="w-4 h-4 opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

