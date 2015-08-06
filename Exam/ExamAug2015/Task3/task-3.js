function solve() {
    return function (selector) {
        var template = '<div class="event-calendar">
            <h2 class="header">Appointments for <span class="month">{{month}}</span> <span class="year">{{year}}</span></h2>
        {{#each days}}
        <div class="col-date">
            <div class="date">{{this.day}}</div>
        {{#each events}}
        <div class="events">

            <div class="event {{importance}}">
                <div class="title">Free slot</div>
            </div>
        {{/each}}
            {{#each events}}
            <div class="event {{importance}}" title="duration: {{duration}}">
                <div class="title">{{this.title}}</div>
                <span class="time">at: {{time}}</span>
            </div>
            {{/each}}
                {{#each events}}
                <div class="event {{this.importance}}">
                    <div class="title">Free slot</div>
                </div>
                {{/each}}
                    {{#each events}}
                    <div class="event {{importance}}" title="duration: {{duration}}">
                        <div class="title">{title}}</div>
                        <span class="time">at: {{time}}</span>
                    </div>
                    {{/each}}
                        {{#each events}}
                        <div class="event {{importance}}">
                            <div class="title">Free slot</div>
                        </div>
                        {{/each}}
                            {{#each events}}

                            <div class="event {{importance}}" title="duration: {{duration}}">
                                <div class="title">{{title}}</div>
                                <span class="time">at: {{time}}</span>
                            </div>
                            {{/each}}
                                {{#each events}}
                                <div class="event {{importance}}">
                                    <div class="title">Free slot</div>
                                </div>

                            </div>
                                {{/each}}
                            </div>
                                    {{/each}}
                                </div>';		
        document.getElementById(selector).innerHTML = template;
    };
}

module.exports = solve;