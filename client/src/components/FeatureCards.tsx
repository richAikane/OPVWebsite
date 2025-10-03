export default function FeatureCards() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4" data-testid="heading-stay-connected">
            Stay Connected 🔗
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center" data-testid="card-schedules">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Schedules & Standings</h3>
            <p className="text-gray-600 mb-6">See match schedules, standings & results on TeamSideline.</p>
            <a 
              href="https://teamsideline.com/sites/aikaneohana/schedules"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300 inline-block"
              data-testid="button-view-schedule"
            >
              View Schedule
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center" data-testid="card-photos">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Game Day Photos</h3>
            <p className="text-gray-600 mb-6">Relive the action with our media partner Eric Z Martin Photography.</p>
            <a 
              href="https://ericzmartin.com/"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-indigo-600 hover-lift transition-all duration-300 inline-block"
              data-testid="button-visit-photos"
            >
              Visit Photo Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
