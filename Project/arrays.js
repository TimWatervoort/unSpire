var adverbs = new Array(
  'appropriately', 'assertively', 'authoritatively', 'collaboratively', 'compellingly', 'competently', 'completely',
  'continually', 'conveniently', 'credibly', 'distinctively', 'dramatically', 'dynamically', 'efficiently',
  'energistically', 'enthusiastically', 'globally', 'holisticly', 'interactively', 'intrinsically', 'monotonectally',
  'objectively', 'phosfluorescently', 'proactively', 'professionally', 'progressively', 'quickly', 'rapidiously',
  'seamlessly', 'synergistically', 'uniquely', 'fungibly', 'uncontrollably', 'quickly', 'unfortunately', 'badly', 'with gusto', 'with your friends', 'with my friends', 'with Putin', 'without you', 'at the gym', 'around your parents', 'alone', 'at home'
);

var verbs = new Array(
  'actualize', 'administrate', 'aggregate', 'architect', 'benchmark', 'brand', 'build', 'communicate', 'conceptualize',
  'coordinate', 'create', 'cultivate', 'customize', 'deliver', 'deploy', 'develop', 'disintermediate', 'disseminate',
  'drive', 'embrace', 'e-enable', 'empower', 'enable', 'engage', 'engineer', 'enhance', 'envisioneer', 'evisculate',
  'evolve', 'expedite', 'exploit', 'extend', 'fabricate', 'facilitate', 'fashion', 'formulate', 'foster', 'generate',
  'grow', 'harness', 'impact', 'implement', 'incentivize', 'incubate', 'initiate', 'innovate', 'integrate', 'iterate', 'maintain', 'matrix', 'maximize', 'mesh', 'monetize', 'morph', 'myocardinate',
  'negotiate', 'network', 'optimize', 'orchestrate', 'parallel task', 'plagiarize', 'pontificate', 'predominate',
  'procrastinate', 'productivate', 'productize', 'promote', 'pursue', 'recaptiualize',
  'reconceptualize', 'redefine', 're-engineer', 'reintermediate', 'reinvent', 'repurpose', 'restore', 'revolutionize',
  'scale', 'seize', 'simplify', 'strategize', 'streamline', 'supply', 'syndicate', 'synergize', 'synthesize', 'target',
  'transform', 'transition', 'underwhelm', 'unleash', 'utilize', 'visualize', 'whiteboard', 'cloudify', 'right-shore', 'run away', 'exist', 'yell', 'scream', 'ponder', 'worry', 'enjoy', 'become'
);

var adjectives = new Array(
  '24/7', '24/365', 'accurate', 'adaptive', 'alternative', 'an expanded array of', 'B2B', 'B2C', 'backend',
  'backward-compatible', 'best-of-breed', 'bleeding-edge', 'bricks-and-clicks', 'business', 'clicks-and-mortar',
  'client-based', 'client-centered', 'client-centric', 'client-focused', 'collaborative', 'compelling', 'competitive',
  'cooperative', 'corporate', 'cost effective', 'covalent', 'cross functional', 'cross-media', 'cross-platform',
  'cross-unit', 'customer directed', 'customized', 'cutting-edge', 'distinctive', 'distributed', 'diverse', 'dynamic',
  'e-business', 'economically sound', 'effective', 'efficient', 'emerging', 'empowered', 'enabled', 'end-to-end',
  'enterprise', 'enterprise-wide', 'equity invested', 'error-free', 'ethical', 'excellent', 'exceptional', 'extensible',
  'extensive', 'flexible', 'focused', 'frictionless', 'front-end', 'fully researched', 'fully tested', 'functional',
  'functionalized', 'future-proof', 'global', 'go forward', 'goal-oriented', 'granular', 'high standards in',
  'high-payoff', 'high-quality', 'highly efficient', 'holistic', 'impactful', 'inexpensive', 'innovative',
  'installed base', 'integrated', 'interactive', 'interdependent', 'intermandated', 'interoperable', 'intuitive',
  'just in time', 'leading-edge', 'leveraged', 'long-term high-impact', 'low-risk high-yield', 'magnetic',
  'maintainable', 'market positioning', 'market-driven', 'mission-critical', 'multidisciplinary', 'multifunctional',
  'multimedia based', 'next-generation', 'one-to-one', 'open-source', 'optimal', 'orthogonal', 'out-of-the-box',
  'pandemic', 'parallel', 'performance based', 'plug-and-play', 'premier', 'premium', 'principle-centered', 'proactive',
  'process-centric', 'professional', 'progressive', 'prospective', 'quality', 'real-time', 'reliable', 'resource-sucking',
  'resource-maximizing', 'resource-leveling', 'revolutionary', 'robust', 'scalable', 'seamless', 'stand-alone',
  'standardized', 'standards compliant', 'state of the art', 'sticky', 'strategic', 'superior', 'sustainable',
  'synergistic', 'tactical', 'team building', 'team driven', 'technically sound', 'timely', 'top-line', 'transparent',
  'turnkey', 'ubiquitous', 'unique', 'user-centric', 'user friendly', 'value-added', 'vertical', 'viral', 'virtual',
  'visionary', 'web-enabled', 'wireless', 'world-class', 'worldwide', 'fungible', 'cloud-ready', 'elastic', 'hyper-scale',
  'on-demand', 'cloud-based', 'cloud-centric', 'cloudified', 'agile', 'bold', 'depressing', 'uncontrollable', 'slippery', 'dank', 'wonderful', 'potent', 'alarming', 'frightful', 'awful'
);

var nouns = new Array(
  'action items', 'alignments', 'applications', 'architectures', 'bandwidth', 'benefits',
  'best practices', 'catalysts for change', 'channels', 'collaboration and idea-sharing', 'communities', 'content',
  'convergence', 'core competencies', 'customer service', 'data', 'deliverables', 'e-business', 'e-commerce', 'e-markets',
  'e-tailers', 'e-services', 'experiences', 'expertise', 'functionalities', 'growth strategies', 'human capital',
  'ideas', 'imperatives', 'infomediaries', 'information', 'infrastructures', 'initiatives', 'innovation',
  'intellectual capital', 'interfaces', 'internal or "organic" sources', 'leadership', 'leadership skills',
  'manufactured products', 'markets', 'materials', 'meta-services', 'methodologies', 'methods of empowerment', 'metrics',
  'mindshare', 'models', 'networks', 'niches', 'niche markets', 'opportunities', '"outside the box" thinking', 'outsourcing',
  'paradigms', 'partnerships', 'platforms', 'portals', 'potentialities', 'process improvements', 'processes', 'products',
  'quality vectors', 'relationships', 'resources', 'results', 'ROI', 'scenarios', 'schemas', 'services', 'solutions',
  'sources', 'strategic theme areas', 'supply chains', 'synergy', 'systems', 'technologies', 'technology',
  'testing procedures', 'total linkage', 'users', 'value', 'vortals', 'web-readiness', 'web services', 'fungibility',
  'clouds', 'nosql', 'storage', 'virtualization', 'scrums', 'sprints', 'wins', 'customers', 'violations', 'restaurants', 'hotels', 'coffee shops', 'screams', 'pleas', 'shrieks', 'beverages', 'meals'
);

var authors = new Array(
  'Socrates', 'Plato', 'Aristotle', 'Jim', 'Matthew McConaughey', 'The Moon', 'Beyonce', 'Julius Caesar', 'Gary Oldman', 'Frank from accounting', 'J.K. Rowling', 'Kanye West', 'Sandra Bullock', 'George W. Bush', 'Barack Obama', 'George Washington', 'Abraham Lincoln', 'Pythagoras', 'Isaac Newton', 'Gregor Mendel',
  'Tycho Brahe', 'Albert Einstein', 'Stephen Hawking', 'Someone holding a banana', 'The Unholy One', 'God', 'Satan', 'Jesus Christ', 'Muhammad', 'The Buddha', 'Gandhi', 'Some guy at the park', 'You', 'George Clooney', 'Seth Rogen', 'Chairman Mao Zedong', 'Kim Jong-Un', 'Harry Potter', 'Batman', 'The Entire Country of Russia',
  'Vladimir Putin', 'Joseph Stalin', 'Alexander the Great', 'William Shakespeare', 'Will Smith', 'Tom Hanks', 'Nobody in particular', 'Linus Torvalds', 'Sean Connery', 'Jerry Springer', 'Dr. Phil', 'Taylor Swift', 'Lady Gaga', 'Arnold Schwarzenegger', 'Ludwig van Beethoven', 'Leonardo da Vinci', 'Vincent van Gogh'
);
