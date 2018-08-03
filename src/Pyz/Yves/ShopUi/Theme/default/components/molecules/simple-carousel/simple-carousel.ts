// import the SimpleCarousel class intead of the Component base one
// you can then use it and extend it
import SimpleCarousel from 'ShopUi/components/molecules/simple-carousel/simple-carousel';

// export the extended class
// this way you can keep the functionality and add your own features
// if you want to replace the functionality, just extend the base Component instead
export default class SimpleCarouselExtended extends SimpleCarousel {
    slide(): void {
        console.log(`Showing view number ${this.viewCurrentIndex + 1}/${this.viewsCount}!`);

        super.slide();

        // this prevent you from resetting to view 1 if you keep pressing on next arrow
        if (this.viewCurrentIndex + 1 === this.viewsCount) {
            this.viewCurrentIndex = this.viewCurrentIndex -1;
        }
    }
}
