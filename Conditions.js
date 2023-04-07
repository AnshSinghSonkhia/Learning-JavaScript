function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription === true) {
        return true;
    }
    else if (freeTrial == true){
        return true;
    } 
    else{
        return false;
    }
}
