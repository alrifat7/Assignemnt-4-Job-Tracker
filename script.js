let interviewList = []
let rejectedList = []

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filter-section')



function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-black', 'text-white')
    rejectedFilterBtn.classList.remove('bg-black', 'text-white')
    interviewFilterBtn.classList.remove('bg-black', 'text-white')


    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black')

    // console.log(id);

    const selected = document.getElementById(id)
    // console.log(selected);

    selected.classList.remove('bg-gray-300', 'text-black' )
    selected.classList.add('bg-black', 'text-white')

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
    } else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}


mainContainer.addEventListener('click', function(event){
    
    // console.log(event.target.classList.contains('interview-btn'))

    if (event.target.classList.contains('interview-btn')){
        const parentNode =event.target.parentNode.parentNode;
    // console.log(event.target.parentNode.parentNode);
    const jobName = parentNode.querySelector('.jobName').innerText
    const jobPlan = parentNode.querySelector('.jobPlan').innerText
    const jobSalary = parentNode.querySelector('.jobSalary').innerText
    const note = parentNode.querySelector('.note').innerText
    const status = parentNode.querySelector('.status').innerText

    
    
    const cardInfo ={
        jobName,
        jobPlan,
        jobSalary,
        note,
        status
    } 

    const jobExist =    interviewList.find(item=> item.jobName == cardInfo.jobName)

    if(!jobExist){
        interviewList.push(cardInfo)
    }
    renderInterview ()
    }

})

function renderInterview (){
    filterSection.innerHTML = ''

    for (let interview of interviewList){
        console.log(interview);
        
        let div = document.createElement('div');
        div.className ='flex justify-between p-8 bg-white rounded-lg shadow card space-y5'
        div.innerHTML = `
                        <div class="space-y-6">
                    <!-- part 1 -->
                    <div clss="gap-6">
                        <h2 class="text-xl font-bold text-blue-900 jobName">Mobile First Crop</h2>
                        <p class="text-gray-500 jobPlan">React Native Developer</p>
                    </div>


                    <!-- part 1-2 -->

                    <div>
                        <p class="text-gray-500 jobSalary">Remote • Full-time • $130,000 - $175,000</p>

                    </div>
                    <!-- part 2 -->
                    <div class="flex gap-4 ">
                        <div class="space-y-2">
                    <!-- part 1-2 -->
                    <span class="inline-block px-4 py-1.5 text-sm font-medium text-blue-900  bg-blue-50 rounded-md note">NOT APPLIED</span>
                    <p class="text-sm leading-relaxed text-gray-700 status">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.
                    </p>
                        </div>
</div>
                    <!-- part 3 -->


                    <div class="flex gap-5">
                        <button class="px-4 py-2 font-medium text-green-500 border rounded-md interview-btn border-emerald-500">INTERVIEW</button>
                        <button class="px-4 py-2 font-medium text-red-500 border border-red-500 rounded-md rejected-btn">REJECTED</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div)
    }
}