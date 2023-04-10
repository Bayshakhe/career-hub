
export const getJobsAndAppliedData = async () => {
    const getJobs = await fetch('fakeJobs.json');
    const jobs = await getJobs.json();
    return jobs;
}