import { useState } from 'react'

// 1. Seu componente reutilizável de Card (Agora aceita a prop 'imagem'!)
function CardCoffee(props) {
  // Estado opcional para curtir cada produto individualmente, se quiser enriquecer o trabalho
  const [curtido, setCurtido] = useState(false)

  return (
    <div style={{ 
      border: '1px solid #e0e0e0', 
      padding: '15px', 
      margin: '15px', 
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      width: '220px',
      textAlign: 'center'
    }}>
      {/* Aqui a mágica da imagem acontece usando a prop recebida */}
      <img 
        src={props.imagem} 
        alt={props.nome} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <h3 style={{ margin: '10px 0 5px 0', color: '#333' }}>{props.nome}</h3>
      <p style={{ margin: '0 0 10px 0', color: '#666', fontWeight: 'bold' }}>{props.preco}</p>
      
      <button 
        onClick={() => setCurtido(!curtido)}
        style={{
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '5px 12px',
          cursor: 'pointer',
          backgroundColor: curtido ? '#ffebee' : '#fff',
          color: curtido ? '#e53935' : '#333'
        }}
      >
        {curtido ? '❤️ Curtido' : '🤍 Curtir'}
      </button>
    </div>
  )
}

export default function App() {
  // Uso do useState principal para a cafeteria (Regra do trabalho!)
  const [likes, setLikes] = useState(0)

  return (
    <div style={{ padding: '0', margin: '0', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* Componente 1: Header */}
      <header style={{ backgroundColor: '#4a2c11', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: '0' }}>☕ Coffee Dev - Cafeteria</h1>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        
        {/* Uso do useState na tela principal */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button 
            onClick={() => setLikes(likes + 1)}
            style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '25px', border: 'none', backgroundColor: '#8d6e63', color: '#fff', cursor: 'pointer' }}
          >
            ❤️ Curtir Cafeteria ({likes})
          </button>
        </div>

        <h2 style={{ color: '#4a2c11', borderBottom: '2px solid #8d6e63', paddingBottom: '10px' }}>Nosso Cardápio:</h2>
        
{/* Componente 2: Cards reutilizados mais de 3 vezes com Props de Nome, Preço e Imagem */}
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
<CardCoffee 
        nome="Cappuccino" 
        preco="R$ 8,50" 
        imagem="https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&auto=format&fit=crop&q=60"
/>
<CardCoffee 
        nome="Café Latte" 
        preco="R$ 7,00" 
        imagem="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&auto=format&fit=crop&q=60"
/>
<CardCoffee 
        nome="Mocha" 
        preco="R$ 9,00" 
        imagem="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&auto=format&fit=crop&q=60"
/>
</div>

      </div>

      {/* Componente 3: Footer */}
      <footer style={{ backgroundColor: '#3e2723', color: '#d7ccc8', padding: '15px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ margin: '0' }}>&copy; 2026 - Desenvolvido por Matheus</p>
      </footer>
    </div>
  )
}