export default function ThemeScript() {
    const themeScript = `
    (function() {
      function getThemePreference() {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      function setTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
      }
      
      var theme = getThemePreference();
      setTheme(theme);
      
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        var newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      });
    })();
  `;

    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
