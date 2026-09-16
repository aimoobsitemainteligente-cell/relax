import styles from "./ProductCard.module.css";
import Image from "next/image";

export type BadgeType = 
  | 'top10' 
  | 'entrega24h' 
  | 'full2h' 
  | 'novo' 
  | 'discount' 
  | 'maisVendido' 
  | 'freteGratis' 
  | 'esgotado';

interface BadgeConfig {
  color: string;
  label: string;
  icon?: string; // We'll use emojis for simplicity, but in a real app these would be SVGs
}

const BADGES: Record<BadgeType, BadgeConfig> = {
  top10: { color: '#F59E0B', label: 'TOP 10', icon: '⭐' },
  entrega24h: { color: '#3B82F6', label: 'ENTREGA 24H', icon: '🚚' },
  full2h: { color: '#22C55E', label: 'FULL 2H', icon: '⚡' },
  novo: { color: '#E91E63', label: 'NOVO' },
  discount: { color: '#EF4444', label: '' }, // Label is dynamic (e.g. -20% OFF)
  maisVendido: { color: '#8B5CF6', label: 'MAIS VENDIDO', icon: '🏆' },
  freteGratis: { color: '#14B8A6', label: 'FRETE GRÁTIS', icon: '📦' },
  esgotado: { color: '#6B7280', label: 'ESGOTADO' }
};

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  badge?: BadgeType;
  discountLabel?: string; // e.g. "-20% OFF"
  imageUrl?: string;
  onBuyClick?: () => void;
}

export function ProductCard({ name, price, oldPrice, badge, discountLabel, imageUrl, onBuyClick }: ProductCardProps) {
  const badgeConfig = badge ? BADGES[badge] : null;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        {/* Placeholder if no image */}
        {!imageUrl && <div className={styles.imagePlaceholder} />}
        {imageUrl && <img src={imageUrl} alt={name} className={styles.image} />}
        
        {badgeConfig && (
          <div 
            className={styles.badge} 
            style={{ backgroundColor: badgeConfig.color }}
          >
            {badgeConfig.icon && <span className={styles.badgeIcon}>{badgeConfig.icon}</span>}
            <span className={styles.badgeText}>
              {badge === 'discount' ? discountLabel : badgeConfig.label}
            </span>
          </div>
        )}
      </div>

      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{name}</h3>
        
        {oldPrice && <span className={styles.oldPrice}>R$ {oldPrice}</span>}
        
        <div className={styles.priceRow}>
          <span className={styles.price}>R$ {price}</span>
          <span className={styles.pixTag}>NO PIX</span>
        </div>
        
        <button className={styles.buyButton} onClick={onBuyClick}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
