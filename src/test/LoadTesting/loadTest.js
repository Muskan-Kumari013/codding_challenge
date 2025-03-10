import { check, sleep, group } from 'k6';
import http from 'k6/http';

// Define the options for different load stages
export let options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp up to 50 users
    { duration: '2m', target: 100 },  // Ramp up to 100 users
    { duration: '4m', target: 200 }, // Ramp up to 200 users
    { duration: '2m', target: 0 },    // Ramp down to 0 users
  ],
  thresholds: {
    'http_req_duration': ['p(80)<9000'], // 80% of requests should complete in less than 9 seconds
    'http_req_failed': ['rate<0.1'],    // Less than 10% error rate
  },
};

export default function () {
  // Scenario 1: Home Page Browsing
  group('Home Page Browsing', function () {
    let res = http.get('https://www.bbc.com');
    check(res, {
      'Homepage loaded successfully': (r) => r.status === 200,
      'Homepage has headline': (r) => r.body && r.body.includes('BBC News'),
    });
    sleep(2); // Simulate user thinking time
  });

  // Scenario 2: Search and Navigation
  group('Search and Navigation', function () {
    let searchParams = ['Politics', 'Sports', 'Technology'];
    let searchTerm = searchParams[Math.floor(Math.random() * searchParams.length)];

    // Simulate search query
    let searchRes = http.get(`https://www.bbc.com/search?q=${searchTerm}`);
    check(searchRes, {
      'Search results loaded': (r) => r.status === 200,
    });

    // Extract the first article link from the search results
    const articleLinkMatch = searchRes.body.match(/href="(\/news\/[^"]+)"/);
    if (articleLinkMatch && articleLinkMatch[1]) {
      let articleLink = 'https://www.bbc.com' + articleLinkMatch[1];
      let articleRes = http.get(articleLink);
      check(articleRes, {
        'Article opened successfully': (r) => r.status === 200,
      });
    } else {
      console.log('No article link found!');
    }

    sleep(2); // Simulate user reading time
  });


  // Scenario 3: Article Reading
group('Article Reading', function () {
    // Search for articles
    let searchParams = ['Politics', 'Sports', 'Technology'];
    let searchTerm = searchParams[Math.floor(Math.random() * searchParams.length)];
  
    // Simulate search query to get articles
    let searchRes = http.get(`https://www.bbc.com/search?q=${searchTerm}`);
    check(searchRes, {
      'Search results loaded': (r) => r.status === 200,
    });
  
    // Extract the first article link from the search results
    const articleLinkMatch = searchRes.body.match(/href="(\/news\/[^"]+)"/);
    if (articleLinkMatch && articleLinkMatch[1]) {
      let articleLink = 'https://www.bbc.com' + articleLinkMatch[1]; // Complete the URL
      let articleRes = http.get(articleLink); // Request the article
  
      check(articleRes, {
        'Article loaded successfully': (r) => r.status === 200,
      });
    } else {
      console.log('No article link found!');
    }
  
    sleep(50); // Simulate reading the article for 50 seconds
  });
  
}
