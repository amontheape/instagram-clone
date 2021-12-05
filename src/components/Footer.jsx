export default function Footer() {
  const iconName = ['home', 'search-outline', 'add-circle-outline', 'heart-outline', 'person-outline'];
  
    return (
      <div class="fundo-mobile">
        {iconName.map((p) => <ion-icon name={p} />)}
      </div>
    )
}

