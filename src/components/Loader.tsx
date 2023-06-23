import ContentLoader from 'react-content-loader'

export const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1920}
    viewBox="0 0 1920 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="285" y="50" rx="2" ry="2" width="500" height="500" />
    <rect x="1155" y="50" rx="2" ry="2" width="500" height="30" />
    <rect x="1155" y="85" rx="2" ry="2" width="500" height="20" />
    <rect x="1155" y="109" rx="2" ry="2" width="500" height="20" />
    <rect x="1155" y="132" rx="2" ry="2" width="500" height="20" />
    <rect x="1155" y="159" rx="2" ry="2" width="500" height="25" />
    <rect x="1155" y="195" rx="2" ry="2" width="500" height="40" />
  </ContentLoader>
)
export const LoaderProducts = () => (
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />

  </ContentLoader>
)
