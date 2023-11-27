let url = $request.url;
let hasUid = (url) => url.includes("uid");
let getUid = (url) => (hasUid(url) ? url.match(/uid=(\d+)/)[1] : undefined);
if (url.includes("users/show")) {
    $prefs.setValueForKey(getUid(url), "weibouid");
    $done({});
} else if (url.includes("statuses/user_timeline")) {
    try{
        let data = JSON.parse($response.body);
        let statuses = data.cards
            .map((card) => (card.card_group ? card.card_group : card))
            .flat()
            .filter((card) => card.card_type === 9)
            .map((card) => card.mblog);
        let sinceId = data.cardlistInfo.since_id;
        $done({
            body: JSON.stringify({
                statuses,
                since_id: sinceId,
                total_number: 100
            })
        });
    } catch {
        let uid = getUid(url) || $prefs.valueForKey("weibouid");
        url = url.replace("statuses/user_timeline", "profile/statuses/tab").replace("max_id", "since_id");
        url = url + `&containerid=230413${uid}_-_WEIBO_SECOND_PROFILE_WEIBO`;
        $done({
            url
        });
    }

} else {
    $done({});
}