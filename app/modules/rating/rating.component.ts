export default function RatingComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {
            onRated: '&',
            item: '=',
            maxRating: '@'
        },
        templateUrl: 'modules/rating/rating.html',
        controller($element:angular.IAugmentedJQuery) {
            this.setNewRating = $event => {
                const index = Array.from($element.find('span')).findIndex(element => element === $event.target);
                this.onRated({
                    item: this.item,
                    newRating: index + 1
                });
                $event.stopPropagation();
            };

            this.getRange = count => Array.from(new Array(count), (_, index) => index);
        },
        controllerAs: 'ratingCtrl',
        bindToController: true
    }
}
