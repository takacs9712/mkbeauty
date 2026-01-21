import { useNavigate } from "react-router-dom";
import { servicesSummary } from "../../data/servicesSummary";
import img1 from "../../assets/facebook/1.jpg";
import img2 from "../../assets/facebook/2.jpg";
import img3 from "../../assets/facebook/3.jpg";
import img4 from "../../assets/facebook/4.jpg";
import { motion } from "framer-motion";

export function ServicesPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="section-title">
              Szolgáltatásaim
            </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
       

            <div className="space-y-6">
              {servicesSummary.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="card-title">{service.title}</h3>
                  <p className="body-small">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => navigate("/arak")}
                className="mt-8 btn-primary"
              >
                Árak megtekintése
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 order-1 md:order-2 max-w-lg mx-auto md:max-w-none"
          >
            <img
              src={img1}
              alt="Szemöldök tetoválás"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src={img2}
              alt="Ajak tetoválás"
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500"
            />
            <img
              src={img3}
              alt="Szemhéj tetoválás"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src={img4}
              alt="Esztétikus eredmény"
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
