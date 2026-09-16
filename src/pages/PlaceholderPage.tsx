interface PlaceholderPageProps {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2.5rem', marginBottom: '16px', color: '#1a3a2a' }}>
        {title}
      </h1>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem', color: '#555', maxWidth: '500px' }}>
        This page is being migrated to React. Please check back soon.
      </p>
    </section>
  )
}
