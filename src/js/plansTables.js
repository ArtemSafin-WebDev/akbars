export default function() {
  const plansTables = Array.from(document.querySelectorAll('.js-plans-table'))

  plansTables.forEach(table => {
    const discountSelects = Array.from(table.querySelectorAll('.js-select-discount'))
    const discountedPriceCells = Array.from(table.querySelectorAll('.js-discounted-price'))
    const bonusCells = Array.from(table.querySelectorAll('.js-bonus'))
    

    discountSelects.forEach((button, buttonIndex) => {
      button.addEventListener('click', function() {
        discountSelects.forEach(button => {
          button.classList.remove('selected')
        })
        this.classList.add('selected')
        discountedPriceCells.forEach(priceCell => {
          const priceVariants = Array.from(priceCell.querySelectorAll('.js-price-variant'))
          priceVariants.forEach((priceVariant, priceVariantIndex) => {
            if (priceVariantIndex === buttonIndex) {
              priceVariant.classList.add('selected')
            } else {
              priceVariant.classList.remove('selected')
            }
          })
        })
        bonusCells.forEach(bonusCell => {
          const bonusAmounts = Array.from(bonusCell.querySelectorAll('.js-bonus-amount'))
          bonusAmounts.forEach((bonusAmount, bonusIndex) => {
            if (bonusIndex === buttonIndex) {
              bonusAmount.classList.add('selected')
            } else {
              bonusAmount.classList.remove('selected')
            }
          })
        })
        console.log(`Selected ${buttonIndex + 1} discount plan`)
      })
    })
  })

  


}