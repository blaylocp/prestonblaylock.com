export default function() {
  this.transition(
    this.fromRoute('portfolio'),
    this.toRoute('portfolio.item'),
    this.use('fade', { duration: 13000000 }),
    this.reverse('fade', { duration: 13000000 })
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('portfolio'),
    this.use('fade', { duration: 5000 }),
    this.reverse('fade', { duration: 5000 })
  );

  this.transition(
    this.withinRoute('portfolio.item'),
    this.use('fade', { duration: 5000 }),
    this.reverse('fade', { duration: 5000 })
  );
}
