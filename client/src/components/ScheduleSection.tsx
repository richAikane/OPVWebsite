export default function ScheduleSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-schedule">
            Season 4 Schedule
          </h2>
          <div className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              Season 4 will run Saturdays from September 20, 2025 to November 22, 2025.
              The games will run from 9:00AM to 3:00PM.
            </p>
            <p className="mb-6">
              Specific team schedules will be posted on Team Sideline.
              Download the app and sync your team schedule to your calendar!
            </p>
            <a
              href="https://teamsideline.com/sites/aikaneohana/schedules"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors duration-300"
              data-testid="button-team-sideline"
            >
              View All Schedules on Team Sideline
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {/* Competitive Division */}
          <div className="bg-white border border-red-500 p-8 flex flex-col min-h-[280px] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="text-xl text-red-500 font-semibold mb-6" data-testid="division-competitive">
              Competitive Division (BB)
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="text-xs text-gray-500 mb-1">Interactive Schedule:</div>
              <a
                href="https://teamsideline.com/sites/aikaneohana/schedule/633500/0/1/BB-Competitive"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-800 transition-colors duration-300"
                data-testid="button-competitive-schedule"
              >
                View Competitive Schedule
              </a>
              <div className="text-xs text-gray-500 mb-1 mt-4">Download PDF:</div>
              <a
                href="https://952afa62-c5c6-46d2-99a2-68410ce0e296.usrfiles.com/ugd/952afa_7f364347b07844169db606b61e5df2d8.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 border-2 border-gray-700 px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
                data-testid="button-competitive-pdf"
              >
                Download PDF Schedule
              </a>
            </div>
          </div>

          {/* Intermediate Division */}
          <div className="bg-white border border-blue-500 p-8 flex flex-col min-h-[280px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="text-xl text-blue-500 font-semibold mb-6" data-testid="division-intermediate">
              Intermediate Division (B)
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="text-xs text-gray-500 mb-1">Interactive Schedule:</div>
              <a
                href="https://teamsideline.com/sites/aikaneohana/schedule/630411/0/1/B-Intermediate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-800 transition-colors duration-300"
                data-testid="button-intermediate-schedule"
              >
                View Intermediate Schedule
              </a>
              <div className="text-xs text-gray-500 mb-1 mt-4">Download PDF:</div>
              <a
                href="https://952afa62-c5c6-46d2-99a2-68410ce0e296.usrfiles.com/ugd/952afa_0fbf6a8d59f44fd0ab371b5438e26c3b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 border-2 border-gray-700 px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
                data-testid="button-intermediate-pdf"
              >
                Download PDF Schedule
              </a>
            </div>
          </div>

          {/* Social Division */}
          <div className="bg-white border border-green-500 p-8 flex flex-col min-h-[280px] animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="text-xl text-green-500 font-semibold mb-6" data-testid="division-social">
              Social Division (C)
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="text-xs text-gray-500 mb-1">Interactive Schedule:</div>
              <a
                href="https://teamsideline.com/sites/aikaneohana/schedule/630412/0/1/C-Social"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-800 transition-colors duration-300"
                data-testid="button-social-schedule"
              >
                View Social Schedule
              </a>
              <div className="text-xs text-gray-500 mb-1 mt-4">Download PDF:</div>
              <a
                href="https://952afa62-c5c6-46d2-99a2-68410ce0e296.usrfiles.com/ugd/952afa_5039a55f2e984b8e8c4f2f0fe1c08516.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 border-2 border-gray-700 px-6 py-3 rounded-full text-sm text-center font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
                data-testid="button-social-pdf"
              >
                Download PDF Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
